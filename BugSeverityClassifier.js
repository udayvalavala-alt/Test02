let frequency='rarely';
let severity='blocker';

if (frequency === 'always' && severity === 'blocker') 
    {
        console.log("P0")

    } else if (frequency === 'always' && severity === 'major')
    {
        console.log("P1")
    } else if (frequency === 'always' && severity === 'minor')
    {
        console.log("P2")
     } else if (frequency === 'often' && severity === 'blocker')
        {
            console.log("P1")
        }
        else if (frequency === 'often' && severity === 'major')
        {
            console.log("P2")
        }
        else if (frequency === 'often' && severity === 'minor')
        {
            console.log("P3")
        }
        else if (frequency === 'rarely' && severity === 'blocker')
        {
            console.log("P2")
        }
        else if (frequency === 'rarely' && severity === 'major')
        {
            console.log("P3")
        }
        else if (frequency === 'rarely' && severity === 'minor')
        {
            console.log("P4")
        }       
        else {
            console.log("Priority cannot be determined")
            }
            

