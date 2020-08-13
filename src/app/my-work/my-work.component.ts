import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
	$(document).keydown(function(e) {
		switch(e.which) {
			case 37: // left
			this.moveToSelected('prev');
			break;
	
			case 39: // right
			this.moveToSelected('next');
			break;
	
			default: return;
		}
		e.preventDefault();
	});
	var that = this;
	
	$('#carousel div').click(function() {
		that.moveToSelected($(this));
	});
	
	$('#prev').click(function() {
		that.moveToSelected('prev');
	});
	
	$('#next').click(function() {
		that.moveToSelected('next');
	});
  }

  moveToSelected(element) {

	if (element == "next") {
	  var selected = $(".selected").next();
	} else if (element == "prev") {
	  var selected = $(".selected").prev();
	} else {
	  var selected = element;
	}
  
	var next = $(selected).next();
	var prev = $(selected).prev();
	var prevSecond = $(prev).prev();
	var nextSecond = $(next).next();
  
	$(selected).removeClass().addClass("selected");
  
	$(prev).removeClass().addClass("prev");
	$(next).removeClass().addClass("next");
  
	$(nextSecond).removeClass().addClass("nextRightSecond");
	$(prevSecond).removeClass().addClass("prevLeftSecond");
  
	$(nextSecond).nextAll().removeClass().addClass('hideRight');
	$(prevSecond).prevAll().removeClass().addClass('hideLeft');
  
  }

}
