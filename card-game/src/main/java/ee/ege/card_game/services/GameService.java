package ee.ege.card_game.services;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

import ee.ege.card_game.classes.Card;
import ee.ege.card_game.classes.Player;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Service;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Service
public class GameService {
    private Date startTime;
    private Card baseCard;
    private Card comparingCard;
    private final int MAX_CHOICE_TIME_IN_SECONDS = 10;
    private String errorMsg;
    private final Player player = new Player();

    public void startRound() {
        this.startTime = new Date();
    }

    public void startNewGame(String name) {
        player.setName(name);
        player.setLives(3);
        this.startRound();
    }

    public void checkPlayerHealth() throws Exception{
        if (this.player.getLives() == 0) {
            throw new Exception("Game over");
        }
    }

    public String compareCards(Card newBaseCard, String playerChoice) throws Exception {
        String error = "";
        if (((new Date().getTime() - startTime.getTime()) / 1000) > MAX_CHOICE_TIME_IN_SECONDS) {
            this.startRound();
            error = "TIME_OUT";
        }
        switch (playerChoice) {
            case "higher" -> {
                if (baseCard.getValue() < newBaseCard.getValue()) {
                    this.player.setScore(1);
                } else {
                    this.player.setLives(player.getLives() - 1);
                }
            }
            case "equal" -> {
                if (baseCard.getValue() == newBaseCard.getValue()) {
                    this.player.setScore(1);
                } else {
                    this.player.setLives(player.getLives() - 1);
                }
            }
            case "lower" -> {
                if (baseCard.getValue() > newBaseCard.getValue()) {
                    this.player.setScore(1);
                } else {
                    this.player.setLives(player.getLives() - 1);
                }
            }
            case null, default -> {
                throw new Exception("Invalid player choice");
            }
        }
        baseCard = newBaseCard;
        return error;
    }
}
