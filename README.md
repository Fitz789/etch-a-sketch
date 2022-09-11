# etch-a-sketch

Logic of code:
Page loads, with grid, and default parameters (16 x 16)
Page loads with button to 'reset' grid
Cells have event listener so that they change color when mouse hovers over them
Upon clicking reset button, user is prompted to enter a number of squares per side for new grid
If number is actual integer, the input is taken into a function to change the grid parameters
When the parameters are changed, a the old grid is removed, and a new grid is regenerated

Next steps: Instead of changing cells to one color, have each pass through with mouse change it into random RGB number.
Then have each pass just add another 10% of black, so that after 10 passes square is completely black
