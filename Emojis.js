oh// https://discord.gg/zqVCfPy - WEATHER, TEAMS, GYMS, TYPES
// https://discord.gg/AnECN8U - Legendary boss emojis

/*/////////////// HOW TO USE /////////////////////////////////////
const Emojis = require('./Emojis.js');
const emojis = new Emojis.DiscordEmojis();

bot.on('ready', () => {
    emojis.LoadEmojis(bot);
})
///////////////////////////////////////////////////////////////*/


class DiscordEmojis
{
	constructor()
	{		
        this.Load = LoadEmojis;
	}	
}

function LoadEmojis(bot)
{    
    let guildArray = bot.guilds;

    guildArray = Array.from(guildArray);

    for(var i = 0; i < guildArray.length; i++)
    {
        let guild = bot.guilds.get(guildArray[i][0]);
        if(guild.available)
        {
            if(!this.bug)
            {
                this.bug = guild.emojis.find(emoji => emoji.name === "bugtype");
                if(this.bug) { this.bugReact = this.bug; this.bug = this.bug.toString() }
            }
            
            if(!this.dark)
            {
                this.dark = guild.emojis.find(emoji => emoji.name === "dark");
                if(this.dark) { this.darkReact = this.dark; this.dark = this.dark.toString() }
            }

            if(!this.dragon)
            {
                this.dragon = guild.emojis.find(emoji => emoji.name === "dragontype");
                if(this.dragon) { this.dragonReact = this.dragon; this.dragon = this.dragon.toString() }
            }

            if(!this.electric)
            {
                this.electric = guild.emojis.find(emoji => emoji.name === "electric");
                if(this.electric) { this.electricReact = this.electric; this.electric = this.electric.toString() }
            }
            if(!this.ground)
            {
                this.ground = guild.emojis.find(emoji => emoji.name === "ground");
                if(this.ground) { this.groundReact = this.ground; this.ground = this.ground.toString() }
            }
            if(!this.fire)
            {
                this.fire = guild.emojis.find(emoji => emoji.name === "firetype");
                if(this.fire) { this.fireReact = this.fire; this.fire = this.fire.toString() }
            }
            if(!this.water)
            {
                this.water = guild.emojis.find(emoji => emoji.name === "water");
                if(this.water) { this.waterReact = this.water; this.water = this.water.toString() }
            }
            
            if(!this.rock)
            {
                this.rock = guild.emojis.find(emoji => emoji.name === "rock");
                if(this.rock) { this.rockReact = this.rock; this.rock = this.rock.toString() }
            }
            
            if(!this.fairy)
            {
                this.fairy = guild.emojis.find(emoji => emoji.name === "fairy");
                if(this.fairy) { this.fairyReact = this.fairy; this.fairy = this.fairy.toString() }
            }
            
            if(!this.flying)
            {
                this.flying = guild.emojis.find(emoji => emoji.name === "flying");
                if(this.flying) { this.flyingReact = this.flying; this.flying = this.flying.toString() }
            }

            if(!this.fighting)
            {
                this.fighting = guild.emojis.find(emoji => emoji.name === "fighting");
                if(this.fighting) { this.fightingReact = this.fighting; this.fighting = this.fighting.toString() }
            }

            if(!this.normal)
            {
                this.normal = guild.emojis.find(emoji => emoji.name === "normal");
                if(this.normal) { this.normalReact = this.normal; this.normal = this.normal.toString() }
            }

            if(!this.ice)
            {
                this.ice = guild.emojis.find(emoji => emoji.name === "ice");
                if(this.ice) { this.iceReact = this.ice; this.ice = this.ice.toString() }
            }

            if(!this.grass)
            {
                this.grass = guild.emojis.find(emoji => emoji.name === "grass");
                if(this.grass) { this.grassReact = this.grass; this.grass = this.grass.toString() }
            }

            if(!this.steel)
            {
                this.steel = guild.emojis.find(emoji => emoji.name === "steel");
                if(this.steel) { this.steelReact = this.steel; this.steel = this.steel.toString() }
            }

            if(!this.poison)
            {
                this.poison = guild.emojis.find(emoji => emoji.name === "poison");
                if(this.poison) { this.poisonReact = this.poison; this.poison = this.poison.toString() }
            }

            if(!this.ghost)
            {
                this.ghost = guild.emojis.find(emoji => emoji.name === "ghosttype");
                if(this.ghost) { this.ghostReact = this.ghost; this.ghost = this.ghost.toString() }
            }

            if(!this.psychic)
            {
                this.psychic = guild.emojis.find(emoji => emoji.name === "psychic");
                if(this.psychic) { this.psychicReact = this.psychic; this.psychic = this.psychic.toString() }
            }
            if(!this.gold)
            {
                this.gold = guild.emojis.find(emoji => emoji.name === "gold");
                if(this.gold) { this.goldReact = this.gold; this.gold = this.gold.toString() }
            }
            if(!this.silver)
            {
                this.silver = guild.emojis.find(emoji => emoji.name === "silver");
                if(this.silver) { this.silverReact = this.silver; this.silver = this.silver.toString() }
            }
            if(!this.bronze)
            {
                this.bronze = guild.emojis.find(emoji => emoji.name === "bronze");
                if(this.bronze) { this.bronzeReact = this.bronze; this.bronze = this.bronze.toString() }
            }
            if(!this.valor)
            {
                this.valor = guild.emojis.find(emoji => emoji.name === "valor");
                if(this.valor) { this.valorReact = this.valor; this.valor = this.valor.toString();  }
            }
            if(!this.instinct)
            {
                this.instinct = guild.emojis.find(emoji => emoji.name === "instinct");
                if(this.instinct) { this.instinctReact = this.instinct; this.instinct = this.instinct.toString() }
            }
            if(!this.mystic)
            {
                this.mystic = guild.emojis.find(emoji => emoji.name === "mystic");
                if(this.mystic) { this.mysticReact = this.mystic; this.mystic = this.mystic.toString() }
            }
            if(!this.uncontested)
            {
                this.uncontested = guild.emojis.find(emoji => emoji.name === "uncontested");
                if(this.uncontested) { this.uncontestedReact = this.uncontested; this.uncontested = this.uncontested.toString() }
            }
            if(!this.silveregg)
            {
                this.silveregg = guild.emojis.find(emoji => emoji.name === "silveregg");
                if(this.silveregg) { this.silvereggReact = this.silveregg; this.silveregg = this.silveregg.toString() }
            }
            if(!this.pinkegg)
            {
                this.pinkegg = guild.emojis.find(emoji => emoji.name === "pinkegg");
                if(this.pinkegg) { this.pinkeggReact = this.pinkegg; this.pinkegg = this.pinkegg.toString() }
            }
            if(!this.yellowegg)
            {
                this.yellowegg = guild.emojis.find(emoji => emoji.name === "yellowegg");
                if(this.yellowegg) { this.yelloweggReact = this.yellowegg; this.yellowegg = this.yellowegg.toString() }
            }
            if(!this.exPass)
            {
                this.exPass = guild.emojis.find(emoji => emoji.name === "ex_pass");
                if(this.exPass) { this.exPassreact = this.exPass; this.exPass = this.exPass.toString() }
            }
            if(!this.europe2017)
            {
                this.europe2017 = guild.emojis.find(emoji => emoji.name === "eur17");
                if(this.europe2017) { this.europe2017React = this.europe2017; this.europe2017 = this.europe2017.toString() }
            }
            if(!this.yokohama2017)
            {
                this.yokohama2017 = guild.emojis.find(emoji => emoji.name === "yoko17");
                if(this.yokohama2017) { this.yokohama2017React = this.yokohama2017; this.yokohama2017 = this.yokohama2017.toString() }
            }
            if(!this.chicago2017)
            {
                this.chicago2017 = guild.emojis.find(emoji => emoji.name === "chi17");
                if(this.chicago2017) { this.chicago2017React = this.chicago2017; this.chicago2017 = this.chicago2017.toString() }
            }
            if(!this.chicago2018)
            {
                this.chicago2018 = guild.emojis.find(emoji => emoji.name === "chi18");
                if(this.chicago2018) { this.chicago2018React = this.chicago2018; this.chicago2018 = this.chicago2018.toString() }
            }
            if(!this.yokosuka2018)
            {
                this.yokosuka2018 = guild.emojis.find(emoji => emoji.name === "yoko18");
                if(this.yokosuka2018) { this.yokosuka2018React = this.yokosuka2018; this.yokosuka2018 = this.yokosuka2018.toString() }
            }
            if(!this.articuno)
            {
                this.articuno = guild.emojis.find(emoji => emoji.name === "arti");
                if(this.articuno) { this.articunoReact = this.articuno; this.articuno = this.articuno.toString() }
            }
            if(!this.zapdos)
            {
                this.zapdos = guild.emojis.find(emoji => emoji.name === "zapd");
                if(this.zapdos) { this.zapdosReact = this.zapdos; this.zapdos = this.zapdos.toString() }
            }
            if(!this.moltres)
            {
                this.moltres = guild.emojis.find(emoji => emoji.name === "molt");
                if(this.moltres) { this.moltresReact = this.moltres; this.moltres = this.moltres.toString() }
            }
            if(!this.mewtwo)
            {
                this.mewtwo = guild.emojis.find(emoji => emoji.name === "mewt");
                if(this.mewtwo) { this.mewtwoReact = this.mewtwo; this.mewtwo = this.mewtwo.toString() }
            }
            if(!this.raikou)
            {
                this.raikou = guild.emojis.find(emoji => emoji.name === "raik");
                if(this.raikou) { this.raikouReact = this.raikou; this.raikou = this.raikou.toString() }
            }
            if(!this.entei)
            {
                this.entei = guild.emojis.find(emoji => emoji.name === "ente");
                if(this.entei) { this.enteiReact = this.entei; this.entei = this.entei.toString() }
            }
            if(!this.suicune)
            {
                this.suicune = guild.emojis.find(emoji => emoji.name === "suic");
                if(this.suicune) { this.suicuneReact = this.suicune; this.suicune = this.suicune.toString() }
            }
            if(!this.lugia)
            {
                this.lugia = guild.emojis.find(emoji => emoji.name === "lugi");
                if(this.lugia) { this.lugiaReact = this.lugia; this.lugia = this.lugia.toString() }
            }
            if(!this.ho_oh)
            {
                this.ho_oh = guild.emojis.find(emoji => emoji.name === "hooh");
                if(this.ho_oh) { this.ho_ohReact = this.ho_oh; this.ho_oh = this.ho_oh.toString() }
            }
            if(!this.regirock)
            {
                this.regirock = guild.emojis.find(emoji => emoji.name === "regir");
                if(this.regirock) { this.regirockReact = this.regirock; this.regirock = this.regirock.toString() }
            }
            if(!this.regice)
            {
                this.regice = guild.emojis.find(emoji => emoji.name === "regic");
                if(this.regice) { this.regiceReact = this.regice; this.regice = this.regice.toString() }
            }
            if(!this.registeel)
            {
                this.registeel = guild.emojis.find(emoji => emoji.name === "regis");
                if(this.registeel) { this.registeelReact = this.registeel; this.registeel = this.registeel.toString() }
            }
            if(!this.latias)
            {
                this.latias = guild.emojis.find(emoji => emoji.name === "latia");
                if(this.latias) { this.latiasReact = this.latias; this.latias = this.latias.toString() }
            }
            if(!this.latios)
            {
                this.latios = guild.emojis.find(emoji => emoji.name === "latio");
                if(this.latios) { this.latiosReact = this.latios; this.latios = this.latios.toString() }
            }
            if(!this.kyogre)
            {
                this.kyogre = guild.emojis.find(emoji => emoji.name === "kyog");
                if(this.kyogre) { this.kyogreReact = this.kyogre; this.kyogre = this.kyogre.toString() }
            }
            if(!this.groudon)
            {
                this.groudon = guild.emojis.find(emoji => emoji.name === "grou");
                if(this.groudon) { this.groudonReact = this.groudon; this.groudon = this.groudon.toString() }
            }
            if(!this.rayquaza)
            {
                this.rayquaza = guild.emojis.find(emoji => emoji.name === "rayq");
                if(this.rayquaza) { this.rayquazaReact = this.rayquaza; this.rayquaza = this.rayquaza.toString() }
            }
            if(!this.deoxys)
            {
                this.deoxys = guild.emojis.find(emoji => emoji.name === "deox");
                if(this.deoxys) { this.deoxysReact = this.deoxys; this.deoxys = this.deoxys.toString() }
            }
            if(!this.uxie)
            {
                this.uxie = guild.emojis.find(emoji => emoji.name === "uxie");
                if(this.uxie) { this.uxieReact = this.uxie; this.uxie = this.uxie.toString() }
            }
            if(!this.mesprit)
            {
                this.mesprit = guild.emojis.find(emoji => emoji.name === "mesp");
                if(this.mesprit) { this.mespritReact = this.mesprit; this.mesprit = this.mesprit.toString() }
            }
            if(!this.azelf)
            {
                this.azelf = guild.emojis.find(emoji => emoji.name === "azel");
                if(this.azelf) { this.azelfReact = this.azelf; this.azelf = this.azelf.toString() }
            }
            if(!this.dialga)
            {
                this.dialga = guild.emojis.find(emoji => emoji.name === "dial");
                if(this.dialga) { this.dialgaReact = this.dialga; this.dialga = this.dialga.toString() }
            }
            if(!this.palkia)
            {
                this.palkia = guild.emojis.find(emoji => emoji.name === "palk");
                if(this.palkia) { this.palkiaReact = this.palkia; this.palkia = this.palkia.toString() }
            }
            if(!this.heatran)
            {
                this.heatran = guild.emojis.find(emoji => emoji.name === "heat");
                if(this.heatran) { this.heatranReact = this.heatran; this.heatran = this.heatran.toString() }
            }
            if(!this.regigigas)
            {
                this.regigigas = guild.emojis.find(emoji => emoji.name === "regig");
                if(this.regigigas) { this.regigigasReact = this.regigigas; this.regigigas = this.regigigas.toString() }
            }
            if(!this.giratina)
            {
                this.giratina = guild.emojis.find(emoji => emoji.name === "gira");
                if(this.giratina) { this.giratinaReact = this.giratina; this.giratina = this.giratina.toString() }
            }
            if(!this.cresselia)
            {
                this.cresselia = guild.emojis.find(emoji => emoji.name === "cres");
                if(this.cresselia) { this.cresseliaReact = this.cresselia; this.cresselia = this.cresselia.toString() }
            }
            if(!this.totalRaids)
            {
                this.totalRaids = guild.emojis.find(emoji => emoji.name === "lege");
                if(this.totalRaids) {   
                    this.totalRaidsReact = this.totalRaidsReact; this.totalRaids = this.totalRaids.toString();
                    this.legendaryReact = this.totalRaidsReact; this.legendary = this.totalRaids;
                    }
            }
            if(!this.fog)
            {
                this.fog = guild.emojis.find(emoji => emoji.name === "fogweather");
                if(this.fog) { this.fogReact = this.fog; this.fog = this.fog.toString() }
            }
            if(!this.windy)
            {
                this.windy = guild.emojis.find(emoji => emoji.name ==="windy");
                if(this.windy) { this.windyReact = this.windy; this.windy = this.windy.toString() }
            }
            if(!this.snow)
            {
                this.snow = guild.emojis.find(emoji => emoji.name === "snow");
                if(this.snow) { this.snowReact = this.snow; this.snow = this.snow.toString() }
            }
            if(!this.partlyCloudy)
            {
                this.partlyCloudy = guild.emojis.find(emoji => emoji.name === "partlycloudy");
                if(this.partlyCloudy) { this.partlyCloudyReact = this.partlyCloudy; this.partlyCloudy = this.partlyCloudy.toString() }
            }
            if(!this.rain)
            {
                this.rain = guild.emojis.find(emoji => emoji.name === "rain")
                if(this.rain) { this.rainReact = this.rain; this.rain = this.rain.toString() }
            }
            if(!this.cloudy)
            {
                this.cloudy = guild.emojis.find(emoji => emoji.name === "cloudy")
                if(this.cloudy) { this.cloudyReact = this.cloudy; this.cloudy = this.cloudy.toString() }
            }
            if(!this.clear)
            {
                this.clear = guild.emojis.find(emoji => emoji.name === "clear")
                if(this.clear) { this.clearReact = this.clear; this.clear = this.clear.toString() }
            }
        }
    }   
    
}

module.exports = {
	DiscordEmojis
}