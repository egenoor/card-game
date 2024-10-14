package ee.ege.card_game.services;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

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
    private String startTime;
    private String endTime;
    private Card baseCard;
    private Card comparingCard;
    private final int MAX_CHOICE_TIME_IN_SECONDS = 10;
    private final Player player = new Player();

    public void startRound() {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        this.startTime = dtf.format(now);
    }

    public void startNewGame(String name) {
        player.setName(name);
        player.setLives(3);
        this.startRound();
    }

    public void compareCards(Card newBaseCard, String playerChoice) throws Exception {

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
    }
}
