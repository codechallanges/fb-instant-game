// each question got a note out of 10

export default (anwsers)=> {
    let total= 0
    for(let question in anwsers){
        switch (question) {
            case '1':
                total += anwsers[question] === 'yes' ? 5: 8
                break;
            case '2':
                if(anwsers[question] === 'none') total += 6
                if(anwsers[question] instanceof Array){
                        total += anwsers[question].length === 2  ? total -= 2 :
                                 anwsers[question].length === 3 ? total -= 3:
                                      anwsers[question][0] === 'webpack' ? 9:
                                          anwsers[question][0] === 'grunt' || anwsers[question] === 'gulp' ? 7: 0
                }
                break;
            case '3':
                break;
            case '4':
                total += 8
                break;
            case '5':
                total += 5
                if(anwsers[question] > anwsers['5']) total += 2
                else total -= 2
                if(anwsers[question]/(anwsers['3'] || 1) * 100 > 80  ) total += 2 
                break;
            case '6':
               total += 5
            case '7':
                total += 5 + parseInt(anwsers[question] / 20 )
                break;
            case '8':
                total += 5
                if(anwsers[question] instanceof Array ){
                    total += anwsers[question].length
                    if(anwsers[question].includes('react fragments')) total++
                }
                break;
            case '9':
                total += 7
                break;
            case '10':
               if(anwsers[question] === 'no' && anwsers['9'] === 0 ) total += 7
               else if((anwsers[question] === 'no' && anwsers['9'] > 0) 
                    || (anwsers[question] === 'yes' && anwsers['9'] === 0) ) total += 3
               else total += 8
            default:
                break;
        }
    }

    return total
}