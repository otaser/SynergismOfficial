import { player, format } from './Synergism';
import { Globals as G } from './Variables';
import { revealStuff } from './UpdateHTML';
import { calculateTimeAcceleration } from './Calculate';

const offerconsumedesc = "Instantly gain 2 real life hours of Offerings, based on your all time best Offerings/sec and speed acceleration!"
const obtainiumconsumedesc = "Instantly gain 2 real life hours of Obtainium, based on your all time best Obtainium/sec and speed acceleration!"

const offertimerdesc = "Gain +(level)^2 /4% more offerings from all sources!"
const offerautodesc = "Automatically pour Offerings into a rune. 1st level unlocks feature, and each level increases Offering gain by 2%. Every second, 2^(Level) levels worth of offerings are spent. [First Level Cannot be refunded!]"
const obtainiumtimerdesc = "Gain +(level)^2 /2% more obtainium from all sources!"
const obtainiumautodesc = "Automatically pour Obtainium into a research. 1st level unlocks feature, and each level increases Obtainium gain by 2%. Every reincarnation, dump all Obtainium into research until maxed. [First Level Cannot be Refunded!]"
const instantchallengedesc = "T and R challenges don't cause resets if retry is enabled and gain up to 10 completions per tick. Addtionally, instantly gain T challenge completions up to highest completed when exiting R challenges. [Cannot be Refunded!]"
const cashgrabdesc = "This is a cash grab but it gives a couple cool stats. +1% production per level to Offerings and Obtainium."
const antspeeddesc = "Each level gives a 1.5x speed multiplier to all Ant tiers' production! Short and simple."
const shoptalismandesc = "Permanently unlock a Shop talisman! [Warning: you can't refund this and this is VERY expensive to level. Be sure you want to buy it!]"
const challengeExtDesc = "Using some amazing trick, you manage to increase your Reincarnation Challenge cap by 2 for each level! [Cannot be Refunded!]"
const challenge10TomeDesc = "The extended cut: This fifth forgotten tome gives you an additional -20M exponent reduction on the Challenge 10 requirement per level."
const seasonPassDesc = "Wow! Cubes is giving you a deal: Buy this totally fair Season Pass and gain +3% cubes per level when you ascend!"
const cubeToQuarkDesc = "Instead of a daily cap of 25 Quarks by opening Wow! Cubes, how about 100 instead? This adds 75 to the daily cap! [Cannot be Refunded!]"
const tesseractToQuarkDesc = "Instead of a daily cap of 25 Quarks by opening Wow! Tesseracts, how about 100 instead? This adds 75 to the daily cap! [Cannot be Refunded!]"
const hypercubeToQuarkDesc = "Instead of a daily cap of 25 Quarks by opening Wow! Hypercubes, how about 100 instead? This adds 75 to the daily cap! [Cannot be Refunded!]"

export const shopDescriptions = (i: number) => {
    let rofl = document.getElementById("quarkdescription");
    let lmao = document.getElementById("quarkcost");
    let lol = document.getElementById("quarkeffect");

    let { 
        offeringTimerLevel,
        offeringAutoLevel,
        obtainiumTimerLevel,
        obtainiumAutoLevel,
        cashGrabLevel,
        antSpeedLevel,
        challengeExtension,
        challenge10Tomes,
        seasonPassLevel
    } = player.shopUpgrades as { [key: string]: number };

    switch (i) {
        case 1:
            rofl.textContent = offerconsumedesc;
            lmao.textContent = "Cost: " + G['shopBaseCosts'].offerPotion + " Quarks.";
            lol.textContent = "Gain " + format((7200 * player.offeringpersecond * calculateTimeAcceleration()), 0, true) + " Offerings."
            break;
        case 2:
            rofl.textContent = obtainiumconsumedesc;
            lmao.textContent = "Cost: " + G['shopBaseCosts'].obtainiumPotion + " Quarks.";
            lol.textContent = "Gain " + format((7200 * player.maxobtainiumpersecond * calculateTimeAcceleration()), 0, true) + " Obtainium.";
            break;
        case 3:
            rofl.textContent = offertimerdesc;
            lmao.textContent = "Cost: " + (G['shopBaseCosts'].offerTimer + 25 * offeringTimerLevel) + " Quarks."
            lol.textContent = "CURRENT Effect: Offering gain +" + format(1/4 * Math.pow(offeringTimerLevel,2),2,true) + "%!"
            break;
        case 4:
            rofl.textContent = offerautodesc;
            lmao.textContent = "Cost: " + (G['shopBaseCosts'].offerAuto + 25 * offeringAutoLevel) + " Quarks."
            lol.textContent = "CURRENT Effect: Per 10 seconds, pour " + format(Math.pow(2, 1 + offeringAutoLevel)) + " Offerings. +" + format(2 * offeringAutoLevel, 2) + "% Offerings."
            break;
        case 5:
            rofl.textContent = obtainiumtimerdesc;
            lmao.textContent = "Cost: " + (G['shopBaseCosts'].obtainiumTimer + 25 * obtainiumTimerLevel) + " Quarks."
            lol.textContent = "CURRENT Effect: Obtainium gain +" + format(1/2 * Math.pow(obtainiumTimerLevel,2),2,true) + "%!"
            break;
        case 6:
            rofl.textContent = obtainiumautodesc;
            lmao.textContent = "Cost: " + (G['shopBaseCosts'].obtainiumAuto + 25 * obtainiumAutoLevel) + " Quarks."
            lol.textContent = "CURRENT Effect: Try to upgrade research each reincarnation, and gain +" + format(obtainiumAutoLevel * 2, 2) + "% more Obtainium."
            break;
        case 7:
            rofl.textContent = instantchallengedesc;
            lmao.textContent = "Cost: " + (G['shopBaseCosts'].instantChallenge) + " Quarks."
            lol.textContent = "CURRENT Effect: Even in a premium shop it's kinda obvious, right?"
            break;
        case 8:
            rofl.textContent = cashgrabdesc;
            lmao.textContent = "Cost: " + (G['shopBaseCosts'].cashGrab + 100 * cashGrabLevel) + " Quarks."
            lol.textContent = "CURRENT Effect: Obtainium and Offerings increased by " + format(cashGrabLevel, 2) + "%."
            break;
        case 9:
            rofl.textContent = antspeeddesc;
            lmao.textContent = "Cost: " + (G['shopBaseCosts'].antSpeed + 80 * antSpeedLevel) + " Quarks."
            lol.textContent = "CURRENT Effect: All Ants' Speed x" + format(Math.pow(1.5, antSpeedLevel), 2)
            break;
        case 10:
            rofl.textContent = shoptalismandesc;
            lmao.textContent = "Cost: " + (1500) + " Quarks."
            lol.textContent = "CURRENT Effect: Even in a premium shop it's kinda obvious, right?"
            break;
        case 11:
            rofl.textContent = challengeExtDesc;
            lmao.textContent = "Cost: " + (G['shopBaseCosts'].challengeExtension + 250 * challengeExtension) + " Quarks."
            lol.textContent = "CURRENT Effect: Reincarnation Challenges may be completed an additional " + format(2*challengeExtension) + " times."
            break;
        case 12:
            rofl.textContent = challenge10TomeDesc;
            lmao.textContent = "Cost: " + (G['shopBaseCosts'].challenge10Upgrade + 250 * challenge10Tomes) + " Quarks."
            lol.textContent = "CURRENT Effect: Challenge 10 Exponent Requirement reduced by " + format(20*challenge10Tomes) + "M."
            break;
        case 13:
            rofl.textContent = seasonPassDesc;
            lmao.textContent = "Cost: " + (G['shopBaseCosts'].seasonPass + 250 * seasonPassLevel) + " Quarks."
            lol.textContent = "CURRENT Effect: Ascensions give  +" + format(3*seasonPassLevel) + "% cubes."
            break;
        case 14:
            rofl.textContent = cubeToQuarkDesc;
            lmao.textContent = "Cost: " + (G['shopBaseCosts'].cubeToQuark) + " Quarks."
            lol.textContent = "CURRENT Effect: Even in a premium shop it's kinda obvious, right?"
            break;
        case 15:
            rofl.textContent = tesseractToQuarkDesc;
            lmao.textContent = "Cost: " + (G['shopBaseCosts'].tesseractToQuark) + " Quarks."
            lol.textContent = "CURRENT Effect: Even in a premium shop it's kinda obvious, right?"
            break;
        case 16:
            rofl.textContent = hypercubeToQuarkDesc;
            lmao.textContent = "Cost: " + (G['shopBaseCosts'].hypercubeToQuark) + " Quarks."
            lol.textContent = "CURRENT Effect: Even in a premium shop it's kinda obvious, right?"
            break;
    }

}

export const buyShopUpgrades = (i: number) => {
    let {
        offeringAutoLevel,
        offeringTimerLevel,
        obtainiumTimerLevel,
        obtainiumAutoLevel,
        cashGrabLevel,
        antSpeedLevel,
        challengeExtension,
        challenge10Tomes,
        seasonPassLevel,
    } = player.shopUpgrades as { [key: string]: number };

    let {
        instantChallengeBought,
        talismanBought,
        cubeToQuarkBought,
        tesseractToQuarkBought,
        hypercubeToQuarkBought
    } = player.shopUpgrades as { [key: string]: boolean };

    let p = true;
    if (G['shopConfirmation']) {
        p = confirm("Are you sure of your purchase?")
    }
    if (p) {
        switch (i) {
            case 1:
                if (player.worlds >= G['shopBaseCosts'].offerPotion) {
                    player.worlds -= 100;
                    (player.shopUpgrades.offeringPotion as number) += 1;
                }
                break;
            case 2:
                if (player.worlds >= G['shopBaseCosts'].obtainiumPotion) {
                    player.worlds -= 100;
                    (player.shopUpgrades.obtainiumPotion as number) += 1;
                }
                break;
            case 3:
                if (player.worlds >= (G['shopBaseCosts'].offerTimer + 25 * offeringTimerLevel) && offeringTimerLevel < 15) {
                    player.worlds -= (G['shopBaseCosts'].offerTimer + 25 * offeringTimerLevel);
                    offeringTimerLevel += 1;
                }
                break;
            case 4:
                if (player.worlds >= (G['shopBaseCosts'].offerAuto + 25 * offeringAutoLevel) && offeringAutoLevel < 15) {
                    player.worlds -= (G['shopBaseCosts'].offerAuto + 25 * offeringAutoLevel);
                    offeringAutoLevel += 1;
                }
                break;
            case 5:
                if (player.worlds >= (G['shopBaseCosts'].obtainiumTimer + 25 * obtainiumTimerLevel) && obtainiumTimerLevel < 15) {
                    player.worlds -= (G['shopBaseCosts'].obtainiumTimer + 25 * obtainiumTimerLevel);
                    obtainiumTimerLevel += 1;
                }
                break;
            case 6:
                if (player.worlds >= (G['shopBaseCosts'].obtainiumAuto + 25 * obtainiumAutoLevel) && obtainiumAutoLevel < 15) {
                    player.worlds -= (G['shopBaseCosts'].obtainiumAuto + 25 * obtainiumAutoLevel);
                    obtainiumAutoLevel += 1;
                }
                break;

            case 7:
                if (player.worlds >= G['shopBaseCosts'].instantChallenge && !instantChallengeBought) {
                    player.worlds -= 300;
                    instantChallengeBought = true;
                }
                break;
            case 8:
                if (player.worlds >= (G['shopBaseCosts'].cashGrab + 100 * cashGrabLevel) && cashGrabLevel < 10) {
                    player.worlds -= (G['shopBaseCosts'].cashGrab + 100 * cashGrabLevel);
                    cashGrabLevel += 1;
                }
                break;
            case 9:
                if (player.worlds >= (G['shopBaseCosts'].antSpeed + 80 * antSpeedLevel) && antSpeedLevel < 10) {
                    player.worlds -= (G['shopBaseCosts'].antSpeed + 80 * antSpeedLevel);
                    antSpeedLevel += 1;
                }
                break;
            case 10:
                if (player.worlds >= 1500 && !talismanBought) {
                    player.worlds -= 1500;
                    talismanBought = true;
                }
                break;
            case 11:
                if (player.worlds >= (G['shopBaseCosts'].challengeExtension + 250 * challengeExtension) && challengeExtension < 5) {
                    player.worlds -= (G['shopBaseCosts'].challengeExtension + 250 * challengeExtension);
                    challengeExtension += 1;
                }
                break;
            case 12:
                if (player.worlds >= (G['shopBaseCosts'].challenge10Upgrade + 250 * challenge10Tomes) && challenge10Tomes < 15) {
                    player.worlds -= (G['shopBaseCosts'].challenge10Upgrade + 250 * challenge10Tomes);
                    challenge10Tomes += 1;
                }
                break;
            case 13:
                if (player.worlds >= (G['shopBaseCosts'].seasonPass + 250 * seasonPassLevel) && seasonPassLevel < 15) {
                    player.worlds -= (G['shopBaseCosts'].seasonPass + 250 * seasonPassLevel);
                    seasonPassLevel += 1;
                }
                break;
            case 14:
                if (player.worlds >= (G['shopBaseCosts'].cubeToQuark) && !cubeToQuarkBought) {
                    player.worlds -= (G['shopBaseCosts'].cubeToQuark);
                    cubeToQuarkBought = true;
                }
                break;
            case 15:
                if (player.worlds >= (G['shopBaseCosts'].tesseractToQuark) && !tesseractToQuarkBought) {
                    player.worlds -= (G['shopBaseCosts'].tesseractToQuark);
                    tesseractToQuarkBought = true;
                }
                break;
            case 16:
                if (player.worlds >= (G['shopBaseCosts'].hypercubeToQuark) && !hypercubeToQuarkBought) {
                    player.worlds -= (G['shopBaseCosts'].hypercubeToQuark);
                    hypercubeToQuarkBought = true;
                }
                break;
        }
        revealStuff();
    }
}

export const useConsumable = (i: number) => {
    let {
        offeringPotion,
        obtainiumPotion
    } = player.shopUpgrades as { [key: string]: number };
    
    const p = G['shopConfirmation']
        ? confirm('Would you like to use this potion?')
        : true;

    if (p) {
        switch (i) {
            case 1:
                if (offeringPotion > 0.5) {
                    offeringPotion -= 1;
                    player.runeshards += Math.floor(7200 * player.offeringpersecond * calculateTimeAcceleration());
                }
                break;
            case 2:
                if (obtainiumPotion > 0.5) {
                    obtainiumPotion -= 1;
                    player.researchPoints += Math.floor(7200 * player.maxobtainiumpersecond * calculateTimeAcceleration());
                }
                break;
        }
    }
}

export const resetShopUpgrades = () => {
    let {
        offeringTimerLevel,
        offeringAutoLevel,
        obtainiumTimerLevel,
        obtainiumAutoLevel,
        antSpeedLevel,
        cashGrabLevel,
        challenge10Tomes,
        seasonPassLevel
    } = player.shopUpgrades as { [key: string]: number };

    const p = G['shopConfirmation']
        ? confirm("This will refund 100% of your permanent upgrades for an upfront cost of 15 Quarks. Would you like to do this?")
        : true;

    if (p && player.worlds >= 15) {
        player.worlds -= 15;
        for (let i = 0; i < 20; i++) {
            if (offeringTimerLevel > 0) {
                offeringTimerLevel -= 1;
                player.worlds += (150 + 25 * i)
            }
            if (offeringAutoLevel > 1) {
                offeringAutoLevel -= 1;
                player.worlds += (175 + 25 * i)
            }
            if (obtainiumTimerLevel > 0) {
                obtainiumTimerLevel -= 1;
                player.worlds += (150 + 25 * i)
            }
            if (obtainiumAutoLevel > 1) {
                obtainiumAutoLevel -= 1;
                player.worlds += (175 + 25 * i)
            }
            if (antSpeedLevel > 0) {
                antSpeedLevel -= 1;
                player.worlds += (200 + 80 * i)
            }
            if (cashGrabLevel > 0) {
                cashGrabLevel -= 1;
                player.worlds += (100 + 100 * i)
            }
            if (challenge10Tomes > 0){
                challenge10Tomes -= 1;
                player.worlds += (500 + 250 * i)
            }
            if (seasonPassLevel > 0){
                seasonPassLevel -= 1;
                player.worlds += (500 + 250 * i)
            }
        }
        revealStuff();
    }
}