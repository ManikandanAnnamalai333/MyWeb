using GamesApi.Models;
using Microsoft.AspNetCore.Builder;
using GameStpre.Api;
using Microsoft.AspNetCore.Http;
var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();
List<Games> games = new List<Games>
{
    new Games { Id = 1, Name = "Game One", Genre = "Action", Platform = "PC", ReleaseDate = new DateTime(2020, 1, 1) },
    new Games { Id = 2, Name = "Game Two", Genre = "Adventure", Platform = "Console", ReleaseDate = new DateTime(2021, 5, 15) }
};
app.MapGet("games", () => games);
app.MapGet("games/{id}", (int id) => games.Find(g => g.Id == id));

//POST
app.MapPost("games", (CreateGameDto gameDto) =>
{
    var newGame = new Games
    {
        Id = games.Count + 1,
        Name = gameDto.Name,
        Genre = gameDto.Genre,
        Platform = gameDto.Platform,
        ReleaseDate = gameDto.ReleaseDate.ToDateTime(new TimeOnly(0, 0))
    };
    games.Add(newGame);
    return Results.CreatedAtRoute("GetGameById", new { id = newGame.Id }, newGame);
});
app.Run();