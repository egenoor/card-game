package ee.ege.card_game.dto;

import ee.ege.card_game.classes.Card;
import ee.ege.card_game.classes.Player;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Setter
@Getter
public class CompareCardsResponse {
    private Player player;
    private Card nextCard;
}
