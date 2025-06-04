function loadReviews() {
    console.log("loadReviews Called")
    for (const review of reviews) {
        createReviewElement(review)
    }
}

function handleReviewSubmit() {
    console.log("handleReviewSubmit called!")
}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    loadReviews();

    const form = document.getElementById("review-form")

    form.addEventListener("submit"), function (event) {
        event.preventDefault;
        handleReviewSubmit();
    }

});

function createReviewElement(review) {
    console.log(review)
}

function toggleLike () {
    console.log('Like button clicked');
}

function repostReview() {
    console.log('Repost button clicked');
}

function createReviewElement () {
    const reviewwDiv = document.createElement('div')
    reviewDiv.className = "review-item"
    reviewDiv.innerText =
        `Title:${review.title}` +
        `Review text: ${review.reviewText}` +
        `Rating:${rating}`
    
    const likeButton = document.createElement("button")
    likeButton.setAttribute('id', `like~${review.id}`)
    

}

