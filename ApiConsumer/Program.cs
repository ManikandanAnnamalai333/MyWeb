using System;
using System.IO; 
using System.Text;
class Program
{
    private static readonly HttpClient _httpClient=new HttpClient();
    public static readonly string API_BASE_URL = " http://localhost:5023/games/2";
    static async Task Main(string[] args)
    {
        HttpResponseMessage response=await _httpClient.GetAsync(API_BASE_URL);                  
        response.EnsureSuccessStatusCode();
        string responseBody=await response.Content.ReadAsStringAsync();
        Console.WriteLine(responseBody);
    }               
}