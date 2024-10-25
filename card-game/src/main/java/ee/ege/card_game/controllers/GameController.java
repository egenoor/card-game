package ee.ege.card_game.controllers;

import ee.ege.card_game.classes.Card;
import ee.ege.card_game.classes.Player;
import ee.ege.card_game.dto.CompareCardsResponse;
import ee.ege.card_game.dto.NewGameResponse;
import ee.ege.card_game.repositories.PlayerRepository;
import ee.ege.card_game.services.CardDeckService;
import ee.ege.card_game.services.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class GameController {
    @Autowired
    CardDeckService cardDeckService;

    @Autowired
    GameService gameService;

    @Autowired
    private PlayerRepository playerRepository;

    @GetMapping("/new-game")
    @ResponseBody
    public NewGameResponse newGame(@RequestParam String name) {
        gameService.startNewGame(name);
        cardDeckService.init();
        Card drawnBaseCard = cardDeckService.drawCard();
        gameService.setBaseCard(drawnBaseCard);
        return new NewGameResponse(drawnBaseCard, gameService.getPlayer());
    }

    @GetMapping("/new-round")
    public Card drawNextCard() {
        cardDeckService.init();
        return cardDeckService.drawCard();
    }

    @GetMapping("/compare-cards")
    @ResponseBody
    public CompareCardsResponse compareCards(@RequestParam String playerChoice) throws Exception {
        Card newBaseCard = cardDeckService.drawCard();
        String error = gameService.compareCards(newBaseCard, playerChoice);
        return new CompareCardsResponse(gameService.getPlayer(), gameService.getBaseCard(), error);
    }

    @GetMapping("/players")
    public List<Player> getPlayers() {
        return playerRepository.findAll();
    }
}