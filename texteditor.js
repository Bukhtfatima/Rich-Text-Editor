document.addEventListener('DOMContentLoaded', () => {
    let editor = document.querySelector('#editor');

    changecolor = (color) => {
        let fontcolor = color.value;
        document.execCommand('foreColor', false, fontcolor);
    }

    changefont = (family) => {
        let fontfam = family.value;
        document.execCommand('fontName', false, fontfam);
    }

    changesize = (size) => {
        let fontsize = size.value;
        document.execCommand('fontSize', false, fontsize)
    }

    bold = () => {
        document.execCommand('bold');
    }

    italic = () => {
        document.execCommand('italic')
    }

    underline = () => {
        document.execCommand('underline');
    }
    // blog container after publishing
    let content = document.querySelector('#publishPost');
    // written blog
    let post = document.querySelector('#publishedcontent');
    // red btn
    let publishbtn = document.querySelector('#publish');
    // green btn
    let publishedbtn = document.querySelector('#Published');

    publishPost = () => {
        publishbtn.style.display = "none";
        publishedbtn.style.display = "block";
        post.innerHTML = editor.innerHTML;
        content.style.display = "block";
    }
})