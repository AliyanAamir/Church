import React from 'react'

export default function LiveStream() {
  return (
    <>
        	{/* <!-- main content --> */}
	<main className="main">
		<div className="container-fluid">
			<div className="row">
				{/* <!-- main title --> */}
				<div className="col-12">
					<div className="main__title">
						<h2>Live Streaming</h2>

						<span className="main__title-stat">14 452 total</span>

						<div className="main__title-wrap">
							

							{/* <!-- search --> */}
							<form action="#" className="main__title-form">
								<input type="text" placeholder="Find Streaming"/>
								<button type="button">
									<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8.25998" cy="8.25995" r="7.48191" stroke="#2F80ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle><path d="M13.4637 13.8523L16.3971 16.778" stroke="#2F80ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
								</button>
							</form>
							{/* <!-- end search --> */}
						</div>
					</div>
				</div>
				{/* <!-- end main title --> */}

				<div className="col-lg-12">
						<iframe width="100%" height="750" src="https://www.youtube.com/embed/qsPIMfngPdc" title="Kanye West Sunday Service  - More Than Anything (Live From Paris, France)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>
			</div>
		</div>
	</main>
	{/* <!-- end main content --> */}

	{/* <!-- modal status --> */}
	<div id="modal-status" className="zoom-anim-dialog mfp-hide modal">
		<h6 className="modal__title">Status change</h6>

		<p className="modal__text">Are you sure about immediately change status?</p>

		<div className="modal__btns">
			<button className="modal__btn modal__btn--apply" type="button">Apply</button>
			<button className="modal__btn modal__btn--dismiss" type="button">Dismiss</button>
		</div>
	</div>
	{/* <!-- end modal status --> */}

	{/* <!-- modal delete --> */}
	<div id="modal-delete" className="zoom-anim-dialog mfp-hide modal">
		<h6 className="modal__title">Item delete</h6>

		<p className="modal__text">Are you sure to permanently delete this item?</p>

		<div className="modal__btns">
			<button className="modal__btn modal__btn--apply" type="button">Delete</button>
			<button className="modal__btn modal__btn--dismiss" type="button">Dismiss</button>
		</div>
	</div>
	{/* <!-- end modal delete --> */}
    </>
  )
}
