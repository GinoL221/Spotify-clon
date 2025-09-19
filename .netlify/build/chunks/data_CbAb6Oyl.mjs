const colors = {
  orange: { accent: "#cc5400", dark: "#7c2d12" },
  yellow: { accent: "#ffae00", dark: "#78350f" },
  green: { accent: "#21c872", dark: "#14532d" },
  blue: { accent: "#1e3a8a", dark: "#1e3a8a" },
  purple: { accent: "#df24ff", dark: "#581c87" },
  rose: { accent: "#ed2377", dark: "#871b48" }};

const playlists = [
  {
    id: "1",
    albumId: 1,
    title: "Chill Lo-Fi Music",
    color: colors.yellow,
    cover: "https://f4.bcbits.com/img/a0591684555_16.jpg",
    artists: ["NoSpirit", "Casiio"]
  },
  {
    id: "2",
    albumId: 2,
    title: "Lo-Fi Chill Session",
    color: colors.green,
    cover: "https://f4.bcbits.com/img/a3851444881_16.jpg",
    artists: ["Kupla", "Blue Fox"]
  },
  {
    id: "3",
    albumId: 3,
    title: "Study Session",
    color: colors.rose,
    cover: "https://f4.bcbits.com/img/a3262783092_16.jpg",
    artists: ["Tenno", "xander", "Team Astro"]
  },
  {
    id: "4",
    albumId: 4,
    title: "Blue Note Study Time",
    color: colors.blue,
    cover: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Raimu", "Yasumu"]
  },
  {
    id: "5",
    albumId: 5,
    title: "Chau Saura Session",
    color: colors.purple,
    cover: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["Chau Saura", "amies", "kyu"]
  },
  {
    id: "6",
    albumId: 6,
    title: "Like a Necessity",
    color: colors.orange,
    cover: "https://f4.bcbits.com/img/a0363730459_16.jpg",
    artists: ["WFS", "Nadav Cohen"]
  }
];
const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more"
}));
const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side"
}));
const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists
];
const songs = [
  {
    id: 1,
    albumId: 1,
    title: "Moonlit Walk",
    image: `https://f4.bcbits.com/img/a0591684555_16.jpg`,
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "2:57"
  },
  {
    id: 2,
    albumId: 1,
    title: "Coffee Daze",
    image: `https://f4.bcbits.com/img/a0591684555_16.jpg`,
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:40"
  },
  {
    id: 3,
    albumId: 1,
    title: "Skyline Serenade",
    image: `https://f4.bcbits.com/img/a0591684555_16.jpg`,
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:29"
  },
  {
    id: 4,
    albumId: 1,
    title: "Urban Echoes",
    image: `https://f4.bcbits.com/img/a0591684555_16.jpg`,
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "2:11"
  },
  {
    id: 5,
    albumId: 1,
    title: "Night's End",
    image: `https://f4.bcbits.com/img/a0591684555_16.jpg`,
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "2:26"
  },
  {
    id: 1,
    albumId: 2,
    title: "Silent Rain",
    image: `https://f4.bcbits.com/img/a3851444881_16.jpg`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "2:38"
  },
  {
    id: 2,
    albumId: 2,
    title: "Lost Pages",
    image: `https://f4.bcbits.com/img/a3851444881_16.jpg`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "2:40"
  },
  {
    id: 3,
    albumId: 2,
    title: "Midnight Tales",
    image: `https://f4.bcbits.com/img/a3851444881_16.jpg`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "2:53"
  },
  {
    id: 4,
    albumId: 2,
    title: "City Lights",
    image: `https://f4.bcbits.com/img/a3851444881_16.jpg`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "3:11"
  },
  {
    id: 5,
    albumId: 2,
    title: "Night Drive",
    image: `https://f4.bcbits.com/img/a3851444881_16.jpg`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "2:58"
  },
  {
    id: 1,
    albumId: 3,
    title: "Lunar",
    image: `https://f4.bcbits.com/img/a3262783092_16.jpg`,
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:06"
  },
  {
    id: 2,
    albumId: 3,
    title: "Go go go!",
    image: `https://f4.bcbits.com/img/a3262783092_16.jpg`,
    artists: ["Tenno"],
    album: "Study Session",
    duration: "1:30"
  },
  {
    id: 3,
    albumId: 3,
    title: "Keep focus!",
    image: `https://f4.bcbits.com/img/a3262783092_16.jpg`,
    artists: ["Tenno"],
    album: "Study Session",
    duration: "1:59"
  },
  {
    id: 4,
    albumId: 3,
    title: "JavaScript is the way",
    image: `https://f4.bcbits.com/img/a3262783092_16.jpg`,
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:56"
  },
  {
    id: 5,
    albumId: 3,
    title: "No more TypeScript for me",
    image: `https://f4.bcbits.com/img/a3262783092_16.jpg`,
    artists: ["Tenno"],
    album: "Study Session",
    duration: "2:30"
  },
  {
    id: 1,
    albumId: 4,
    title: "Lunar",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "2:59"
  },
  {
    id: 2,
    albumId: 4,
    title: "Go go go!",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "2:12"
  },
  {
    id: 3,
    albumId: 4,
    title: "Keep focus!",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:02"
  },
  {
    id: 4,
    albumId: 4,
    title: "JavaScript is the way",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "2:29"
  },
  {
    id: 5,
    albumId: 4,
    title: "No more TypeScript for me",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "2:29"
  },
  {
    id: 1,
    albumId: 5,
    title: "Moonlit Walk",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:49"
  },
  {
    id: 2,
    albumId: 5,
    title: "Coffee Daze",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "1:52"
  },
  {
    id: 3,
    albumId: 5,
    title: "Skyline Serenade",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "2:15"
  },
  {
    id: 4,
    albumId: 5,
    title: "Urban Echoes",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "4:06"
  },
  {
    id: 5,
    albumId: 5,
    title: "Night's End",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "2:54"
  },
  {
    id: 1,
    albumId: 6,
    title: "First Encounter",
    image: "https://f4.bcbits.com/img/a0363730459_16.jpg",
    artists: ["Swink", "møndberg"],
    album: "Like a Necessity",
    duration: "2:16"
  },
  {
    id: 2,
    albumId: 6,
    title: "In Front Of Me",
    image: "https://f4.bcbits.com/img/a0363730459_16.jpg",
    artists: ["Swink"],
    album: "Like a Necessity",
    duration: "2:04"
  },
  {
    id: 3,
    albumId: 6,
    title: "My Dream",
    image: "https://f4.bcbits.com/img/a0363730459_16.jpg",
    artists: ["Swink"],
    album: "Like a Necessity",
    duration: "2:20"
  },
  {
    id: 4,
    albumId: 6,
    title: "When The Winters Come",
    image: "https://f4.bcbits.com/img/a0363730459_16.jpg",
    artists: ["Swink", "nytø"],
    album: "Like a Necessity",
    duration: "1:54"
  },
  {
    id: 5,
    albumId: 6,
    title: "Go Back In Time",
    image: "https://f4.bcbits.com/img/a0363730459_16.jpg",
    artists: ["Swink"],
    album: "Like a Necessity",
    duration: "2:04"
  },
  {
    id: 6,
    albumId: 6,
    title: "To Better Como Back",
    image: "https://f4.bcbits.com/img/a0363730459_16.jpg",
    artists: ["Swink"],
    album: "Like a Necessity",
    duration: "2:06"
  }
];

export { allPlaylists as a, playlists as p, songs as s };
