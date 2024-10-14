package ee.ege.card_game.services;

import ee.ege.card_game.classes.Card;
import ee.ege.card_game.enums.Ranks;
import ee.ege.card_game.enums.Suits;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Service
public class CardDeckService {
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

    public Card drawCard () {
        Random rand = new Random();
        int cardIndex = this.cardDeck.get(rand.nextInt(cardDeck.size())).getValue();
        return this.cardDeck.get(cardIndex);
    }
}