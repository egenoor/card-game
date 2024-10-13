package ee.ege.card_game;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class GameController {

    @GetMapping("/new-game")
    public List<Card> newGame() {
        CardDeck cardDeck = new CardDeck();
        cardDeck.init();
        return cardDeck.getCardDeck();
    }
}
