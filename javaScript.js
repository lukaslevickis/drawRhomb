function drawRhomb(rhombSize)
{
    let firstPartSize = Math.ceil(rhombSize / 2) + 1;
    let spanSize = 0;
    let lastRowLength = 0;
    lastRowLength = drawRhombPart(true, firstPartSize, spanSize, lastRowLength); //kaip geriau grazinti lastRowLength?

    let secondPartSize = Math.floor(rhombSize / 2) + 1;
    spanSize = 2;
    drawRhombPart(false, secondPartSize, spanSize, lastRowLength);
}

function drawRhombPart(firstPart, size, spanSize, lastLineSize)
{
    let lastLineSize2 = lastLineSize;
    for (let i = 1; i < size; i++) {
        document.body.innerHTML += '<div>';
        document.body.innerHTML += drawSpans(lastLineSize = firstPart ? i + spanSize : lastLineSize2 - spanSize); //lastLineSize ir lastLineSize2??
        document.body.innerHTML += '</div>';
        spanSize = firstPart ? spanSize + 1 : spanSize + 2;
    }

    return lastLineSize;
}

function drawSpans(size)
{
    let spans = '';
    for (let b = 0; b < size; b++) {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        spans += `<span style="color: #${randomColor};">*</span>`;;
    }

    return spans;
}