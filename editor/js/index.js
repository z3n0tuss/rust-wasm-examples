const draw = (image) => {
    const canvas = document.getElementById("canvas")
    const canvas_context = canvas.getContext("2d")

    canvas_context.fillStyle = "red"
    canvas_context.fillRect(0, 0, 50, 50)
}

const main = async () => {
    const lib = await import("../pkg/index").catch(console.error)

    const image = lib.Image.new()

    draw(image)
}

main()