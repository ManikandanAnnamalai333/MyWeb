namespace GameStpre.Api;

public record class CreateGameDto(
  string Name,
  string Genre,     
  decimal Price,
  string Platform,
  DateOnly ReleaseDate
);
