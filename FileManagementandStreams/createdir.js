const fs = require('fs');
if(fs.existsSync('hello')) {
    console.log('Dir already exits');
} else {
    fs.mkdirSync('hello')
    console.log('syns created')
}

fs.exists('your-files-here', (err) => {
    if(err) {
        console.log('Dir exits')
    }
    else {
        fs.mkdir('your-files-here', (err) => {
            if(err) {
                console.log(`Error: ${err}`);
            } else {
                console.log('Direactory Created');
            }
        } )
    }
}) 


if(fs.existsSync('your-files-here')) {
    console.log('Dir already exits hi');
} else {
    fs.mkdir('your-files-here', (err) => {
        if(err) {
            console.log(`Error: ${err}`);
        } else {
            console.log('Direactory Created');
        }
    } )
}