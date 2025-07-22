namespace GamesApi.Models
{
    public class Games
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string ?Genre { get; set; }
        public string ?Platform { get; set; }
        public DateTime ReleaseDate { get; set; }
    }
}