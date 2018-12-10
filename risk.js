function attack() {
    let attackers = document.getElementById("attacker_troops").value;
    let defenders = document.getElementById("defender_troops").value;
    let attacker_won = 0
    let defender_won = 0

    while (attackers > 1 && defenders > 0) {
        let attacks = [rollDice(), 0, 0], defenses = [rollDice(), 0]

        if (attackers > 2) {
          // Use second dice
          attacks[1] = rollDice()
        }
        if (attackers > 3) {
          // Use third dice
          attacks[2] = rollDice()
        }
        attacks = attacks.sort()

        if (defenders > 1) {
          defenses[1] = rollDice()
        }
        defenses = defenses.sort()

        console.log('Attacks: ' + attacks + '\tDefenses: ' + defenses)
        if (attacks[0] == 6) {
            attacker_won += 1
            console.log('NUCLEAR ATTACK!!')
            if (defenses[0] == 6) {
                console.log('NUCLEAR ATTACK defender_won!!')
                attackers -= 2
                defender_won += 1
                continue
            }
            defenders = 0
            break
        }
        if (defenses[1] !=0 ) {
            if (attacks[2] > defenses[1]) {
                console.log('Attacker won! Attack:Defense', attacks[2] + ':' + defenses[1])
                defenders -= 1
                attacker_won += 1
            } else {
                console.log('Defender won! Attack:Defense', attacks[2] + ':' + defenses[1])
                attackers -= 1
                defender_won += 1
            }
        }
        if (defenses[0] != 0 ) {
            if (attacks[1] > defenses[0]) {
                console.log('Attacker won! Attack:Defense', attacks[1] + ':' + defenses[0])
                defenders -= 1
                attacker_won += 1
            } else if (attacks[1] != 0) {
                console.log('Defender won! Attack:Defense', attacks[1] + ':' + defenses[0])
                attackers -= 1
                defender_won += 1
            }
        }
    }

    let msg = 'Attacker won: ' + attacker_won + '\n'
    msg += 'Defender won: ' + defender_won + '\n'
    console.log(msg)
    if (attackers > 1) {
        msg = '\nAttacker won with ' + attackers + ' troops remaining!'
    } else {
        msg = '\nDefender won with ' + defenders + ' troops remaining!'
        document.getElementById("result").innerHTML = msg;
    }
    document.getElementById("result").innerHTML = msg;
}

function rollDice() {
    return Math.floor((Math.random() * 36) % 6 + 1);
}
