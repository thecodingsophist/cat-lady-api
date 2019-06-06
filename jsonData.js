// **Nested Routes: Mini-Project Requirements**:

//  Create a VERY SIMPLE API in Node and Express that manipulates an array of in-memory objects.

//  * HINT: Recall from BEW1.1 that the HTTP methods we use help tell a great story!
//      * *GET* fetches an object or a list of objects.
//      * *POST* adds a new object to the array.
//      * *PUT* modifies an object in the array.
//      * *DELETE* removes the object from the array.

var JSONCatLadyData = { "ladies": [
    {
        "catLady": [
            {
                "name" :"Maria", "cat": "kevinTheCat"}, 
            {
                "name" :"Anna", "cat": "galaxy"}
        ] 
    },
    {
        "dogLady": [
            {
                "name": "Dany", "dog": "Moxie"}, 
            {
                "name": "Yurac", "dog": "Oliver"}
        ]
    },
    {
        "hatLady": [
            {
                "name": "ancientLady", "hat": "fedora"}, 
            {
                "name": "previousCenturyLady", "hat": "mexicanHat"}
        ]
    }         
]}

