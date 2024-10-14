package ee.ege.card_game.classes;

import ee.ege.card_game.enums.Ranks;
import ee.ege.card_game.enums.Suits;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Card {
    private Suits suit;
    private Ranks rank;
    private int value;
}
