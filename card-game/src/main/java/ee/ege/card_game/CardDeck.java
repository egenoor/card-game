package ee.ege.card_game;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CardDeck {
    private static final int MAX_CARD_VALUE = 10;
    private List<Card> cardDeck = new ArrayList<>();

    public void init () {
        for (Suits suit : Suits.values()) {
            for (Ranks rank : Ranks.values()) {
                int cardValue =  rank.ordinal() + 2;
                Card card = new Card(suit, rank, Math.min(cardValue, MAX_CARD_VALUE));
                cardDeck.add(card);
            }
        }
    }
}
