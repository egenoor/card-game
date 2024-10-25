package ee.ege.card_game.repositories;

import ee.ege.card_game.classes.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player, Long> {
}
