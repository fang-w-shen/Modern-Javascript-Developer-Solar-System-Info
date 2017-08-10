"use strict";
function outputTo(a,b) {		
	$(a).append(`
		<div class="card">
		  <div class="card-header">
		    <div class="card-block">
		    	<h4 class="card-title">${b.name}</h4>
		  	</div>
		  </div>
		  
		  <ul class="list-group list-group-flush">
		    <li class="list-group-item">Radius: ${b.radius}</li>
		    <li class="list-group-item">Mass: ${b.mass}</li>
		    <li class="list-group-item">Orbital Period: ${b.orbitalperiod}</li>
		    <li class="list-group-item">Distance From Sun: ${b.distance}</li>
		  </ul>
		  <div class="card-footer text-muted">
		    <div class="card-block">
		  	<a href="${b.link}" class="btn btn-success">${b.name}</a>
		  </div>
		  </div>
		  
		</div>`
	);	
}
module.exports = outputTo;