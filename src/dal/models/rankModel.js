module.exports.getRank = async (MMR) => {
  let rank = []
  let emblem = []
  let rankRole = []
  if (MMR <= 99) {
    rank = 1
    rankRole = '1'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923669935404752966/1.png'
  }
  if (MMR >= 100 && MMR <= 199) {
    rank = 2
    rankRole = '1'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670633882218536/2.png'
  }
  if (MMR >= 200 && MMR <= 299) {
    rank = 3
    rankRole = '1'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670634112888902/3.png'
  }
  if (MMR >= 300 && MMR <= 399) {
    rank = 4
    rankRole = '1'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670634385530880/4.png'
  }
  if (MMR >= 400 && MMR <= 499) {
    rank = 5
    rankRole = '1'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670634591031316/5.png'
  }
  if (MMR >= 500 && MMR <= 599) {
    rank = 6
    rankRole = '1'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670634905620490/6.png'
  }
  if (MMR >= 600 && MMR <= 699) {
    rank = 7
    rankRole = '1'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670635186626560/7.png'
  }
  if (MMR >= 700 && MMR <= 799) {
    rank = 8
    rankRole = '1'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670635744460810/8.png'
  }
  if (MMR >= 800 && MMR <= 899) {
    rank = 9
    rankRole = '1'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670636046467072/9.png'
  }
  if (MMR >= 900 && MMR <= 999) {
    rank = 10
    rankRole = '10'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670636327489576/10.png'
  }
  if (MMR >= 1000 && MMR <= 1099) {
    rank = 11
    rankRole = '10'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670790916960256/11.png'
  }
  if (MMR >= 1100 && MMR <= 1199) {
    rank = 12
    rankRole = '10'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670791143456768/12.png'
  }
  if (MMR >= 1200 && MMR <= 1299) {
    rank = 13
    rankRole = '10'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670791403487333/13.png'
  }
  if (MMR >= 1300 && MMR <= 1399) {
    rank = 14
    rankRole = '10'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670791667724338/14.png'
  }
  if (MMR >= 1400 && MMR <= 1499) {
    rank = 15
    rankRole = '10'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670791860654080/15.png'
  }
  if (MMR >= 1500 && MMR <= 1599) {
    rank = 16
    rankRole = '10'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670792099741736/16.png'
  }
  if (MMR >= 1600 && MMR <= 1699) {
    rank = 17
    rankRole = '10'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670792351391774/17.png'
  }
  if (MMR >= 1700 && MMR <= 1799) {
    rank = 18
    rankRole = '10'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670792603054190/18.png'
  }
  if (MMR >= 1800 && MMR <= 1899) {
    rank = 19
    rankRole = '10'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670792833757194/19.png'
  }
  if (MMR >= 1900 && MMR <= 1999) {
    rank = 20
    rankRole = '20'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670793102184458/20.png'
  }
  if (MMR >= 2000 && MMR <= 2099) {
    rank = 21
    rankRole = '20'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670867601416232/21.png'
  }
  if (MMR >= 2100 && MMR <= 2199) {
    rank = 22
    rankRole = '20'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670867836272650/22.png'
  }
  if (MMR >= 2200 && MMR <= 2299) {
    rank = 23
    rankRole = '20'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670868037619733/23.png'
  }
  if (MMR >= 2300 && MMR <= 2399) {
    rank = 24
    rankRole = '20'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670868259905546/24.png'
  }
  if (MMR >= 2400 && MMR <= 2499) {
    rank = 25
    rankRole = '20'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670868490596372/25.png'
  }
  if (MMR >= 2500 && MMR <= 2599) {
    rank = 26
    rankRole = '20'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670868658372638/26.png'
  }
  if (MMR >= 2600 && MMR <= 2699) {
    rank = 27
    rankRole = '20'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670868842905600/27.png'
  }
  if (MMR >= 2700 && MMR <= 2799) {
    rank = 28
    rankRole = '20'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670869027475456/28.png'
  }
  if (MMR >= 2800 && MMR <= 2899) {
    rank = 29
    rankRole = '20'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670869224595546/29.png'
  }
  if (MMR >= 2900 && MMR <= 2999) {
    rank = 30
    rankRole = '30'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670869434331176/30.png'
  }
  if (MMR >= 3000 && MMR <= 3099) {
    rank = 31
    rankRole = '30'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670935381368862/31.png'
  }
  if (MMR >= 3100 && MMR <= 3199) {
    rank = 32
    rankRole = '30'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670935687561226/32.png'
  }
  if (MMR >= 3200 && MMR <= 3299) {
    rank = 33
    rankRole = '30'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670935918223451/33.png'
  }
  if (MMR >= 3300 && MMR <= 3399) {
    rank = 34
    rankRole = '30'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670936266354758/34.png'
  }
  if (MMR >= 3400 && MMR <= 3499) {
    rank = 35
    rankRole = '30'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670936476057660/35.png'
  }
  if (MMR >= 3500 && MMR <= 3599) {
    rank = 36
    rankRole = '30'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670936677404673/36.png'
  }
  if (MMR >= 3600 && MMR <= 3699) {
    rank = 37
    rankRole = '30'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670936878719006/37.png'
  }
  if (MMR >= 3700 && MMR <= 3799) {
    rank = 38
    rankRole = '30'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670937281368124/38.png'
  }
  if (MMR >= 3800 && MMR <= 3899) {
    rank = 39
    rankRole = '30'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670937503674388/39.png'
  }
  if (MMR >= 3900 && MMR <= 4174) {
    rank = 40
    rankRole = '40'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670937700827186/40.png'
  }
  if (MMR >= 4175 && MMR <= 4349) {
    rank = 41
    rankRole = '41'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670981690675302/41.png'
  }
  if (MMR >= 4350 && MMR <= 4524) {
    rank = 42
    rankRole = '42'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670981908783145/42.png'
  }
  if (MMR >= 4525 && MMR <= 4749) {
    rank = 43
    rankRole = '43'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670982252724264/43.png'
  }
  if (MMR >= 4750 && MMR <= 4974) {
    rank = 44
    rankRole = '44'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670982433075231/44.png'
  }
  if (MMR >= 4975 && MMR <= 5199) {
    rank = 45
    rankRole = '45'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670982625996821/45.png'
  }
  if (MMR >= 5200 && MMR <= 5449) {
    rank = 46
    rankRole = '46'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670982810550292/46.png'
  }
  if (MMR >= 5450 && MMR <= 5674) {
    rank = 47
    rankRole = '47'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670983066386503/47.png'
  }
  if (MMR >= 5675 && MMR <= 5899) {
    rank = 48
    rankRole = '48'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670983364190258/48.png'
  }
  if (MMR >= 5900 && MMR <= 6124) {
    rank = 49
    rankRole = '49'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670983607463966/49.png'
  }
  if (MMR >= 6125 && MMR <= 6574) {
    rank = 50
    rankRole = '50'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/923670983846547456/50.png'
  }
  if (MMR >= 6575) {
    rank = 'CHAMPION'
    rankRole = 'CHAMPION'
    emblem = 'https://cdn.discordapp.com/attachments/866367138893922314/935325118001991810/Champion.png'
  }
  return [rank, rankRole, emblem];
}