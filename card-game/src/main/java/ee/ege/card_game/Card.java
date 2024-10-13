package ee.ege.card_game;

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
