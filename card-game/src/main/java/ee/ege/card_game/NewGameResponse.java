package ee.ege.card_game;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Setter
@Getter
public class NewGameResponse {
    private Card baseCard;
    private Player player;
}
