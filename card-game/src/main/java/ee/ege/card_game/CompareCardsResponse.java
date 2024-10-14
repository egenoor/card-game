package ee.ege.card_game;

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
