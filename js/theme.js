/* Owl carousel -home starts here*/
$(document).ready(function () {
  // Flight Deal
  $(document).mouseup(function(e){
	  var datalist = $(this).find('li').parent('ul').hasClass('flexdatalist-results');
	  var container = $("#guestListtransfers"); 
		if (!container.is(e.target) && container.has(e.target).length === 0 && datalist == false) 
		{
		  container.hide();
		}
		// For hotel
		var container1 = $("#guestClass");
		if (!container1.is(e.target) && container1.has(e.target).length === 0 && datalist == false)
		{
		  container1.hide();
		}
  });


  if(culture == 'ar'){
    $("#homeMenus").owlCarousel({
      loop: false,
      margin: 0,
      dots: false,
      nav: true,
      rtl: true,
      autoplay: false,
      autoplayTimeout: 2300,
      autoplayHoverPause: true,
          responsive: {
              0: {
                  items: 3,
              },
              767: {
                  items: 3,
              },
              992: {
                  items: 4,
              },
              992: {
                  items: 4,
              },
          },
      });
  
  }else{
    $("#homeMenus").owlCarousel({
      loop: false,
      margin:0,
      dots: false,
      nav: true,
      autoplay: false,
      autoplayTimeout: 2300,
      autoplayHoverPause: true,
          responsive: {
              0: {
                  items: 3,
              },
              767: {
                  items: 3,
              },
              992: {
                  items: 4,
              },
              992: {
                  items: 4,
              },
          },
      });
  
  }
  




  if(culture == 'ar'){
    $("#flightDealPoints_home").owlCarousel({
      loop: false,
      margin: 30,
      dots: true,
      nav: true,
      rtl: true,
      autoplay: true,
      autoplayTimeout: 2300,
      autoplayHoverPause: true,
          responsive: {
              0: {
                  items: 1,
              },
              767: {
                  items: 2,
              },
              992: {
                  items: 4,
              },
              992: {
                  items: 4,
              },
          },
      });
  
  }else{
    $("#flightDealPoints_home").owlCarousel({
      loop: false,
      margin: 30,
      dots: true,
      nav: true,
      autoplay: true,
      autoplayTimeout: 2300,
      autoplayHoverPause: true,
          responsive: {
              0: {
                  items: 1,
              },
              767: {
                  items: 2,
              },
              992: {
                  items: 4,
              },
              992: {
                  items: 4,
              },
          },
      });
  
  }

  // Hotel Deal
  if(culture == 'ar'){
    $("#hotelDealPoints_home").owlCarousel({
      loop: false,
      margin: 30,
      dots: true,
      nav: true,
      rtl: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
          responsive: {
              0: {
                  items: 1,
              },
              767: {
                  items: 2,
              },
              992: {
                  items: 4,
              },
              992: {
                  items: 4,
              },
          },
      });
  }else{
    $("#hotelDealPoints_home").owlCarousel({
      loop: false,
      margin: 30,
      dots: true,
      nav: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
          responsive: {
              0: {
                  items: 1,
              },
              767: {
                  items: 2,
              },
              992: {
                  items: 4,
              },
              992: {
                  items: 4,
              },
          },
      });
  }
 
});
/* Owl carousel -home ends here*/

// Flight Passengers
$(document).ready(function() {
    $("#flightTravellers").click(function() {
        $("#trvlersClass").slideToggle();
    });
    $("#flightTravellers2").click(function() {
        $("#trvlersClass2").slideToggle();
    });
    $("#flightTravellers3").click(function() {
        $("#trvlersClass3").slideToggle();
    });
    //insurance travellers show
    $("#insuranceTravellers").click(function() {
            if( $('#insuranceClass').is(':hidden')){
            $('#insuranceClass').slideToggle();
         
          }
    });


  $("#hotelGuests").click(function () {
    //$("#guestClass").slideToggle();
	if($('#guestClass').is(':visible')){
		
	  }
	  else{
		  $("#guestClass").slideToggle();
	  }
  });
  $("#hotel_apply_button,#hotelHidePsngr").click(function () {
    if($('#guestClass').is(':visible')){
		 $("#guestClass").slideToggle();
	  }
	  else{
		 
	  }
  });
  
  
//   $("#hotelGuests2").click(function () {
//     if($('#guestClass2').is(':visible')){
//         $("#guestClass2").slideToggle();
//      }
  
//   });
//   $("#transfersGuests").click(function () {
// 	  if($('#guestListtransfers').is(':visible')){
// 		//$("#guestListtransfers").slideToggle();
// 	  }
// 	  else{
// 		  $("#guestListtransfers").slideToggle();
// 	  }
//   });
  $("#transfersGuests2").click(function () {
    $("#guestListtransfers2").slideToggle();
  });
  $("#showDtls").click(function () {
    $("#moreDtls").slideToggle();
  });

    $("#showDtls2").click(function() {
        $("#moreDtls2").slideToggle();
    });

    $("#showDtls3").click(function() {
        $("#moreDtls3").slideToggle();
    });

});
$("#hidePsngrInsurance,.insuranceApplyBtn").click(function() {
    if( $('#insuranceClass').is(':visible')){
        $('#insuranceClass').slideToggle()
      }
});

// Flight +hotel (add hotel)
$(document).ready(function() {
    $('.holidayHtlBook input[type="checkbox"]').click(function() {
        if ($(this).prop("checked") == true) {
            $("#roomAvailablityDate").show();
        } else if ($(this).prop("checked") == false) {
            $("#roomAvailablityDate").hide();
        }
    });
});

// Flight Trip
$(document).ready(function() {
    $("#wayOne").click(function() {
        //$("#oneTripSearch").show();
        //$("#roundTripSearch").hide();
        $("#type").val('OneWay');
        $("#oneway_toDate").addClass('hideOn1Way');
        $("#multiTripSearch").hide();
        $(".flight_tripDirection ul li:first-child").addClass("active");
        $(".flight_tripDirection ul li:nth-child(2)").removeClass("active");
        $(".flight_tripDirection ul li:nth-child(3)").removeClass("active");
    });

    $("#wayTwo").click(function() {
        //$("#oneTripSearch").hide();
        //$("#roundTripSearch").show();
        $("#type").val('RoundTrip');
        $("#oneway_toDate").removeClass('hideOn1Way');
        $("#multiTripSearch").hide();
        $(".flight_tripDirection ul li:first-child").removeClass("active");
        $(".flight_tripDirection ul li:nth-child(2)").addClass("active");
        $(".flight_tripDirection ul li:nth-child(3)").removeClass("active");
    });
    $("#wayMulti").click(function() {
        $("#type").val('MultiCity');
        $("#oneTripSearch").hide();
        $("#roundTripSearch").hide();
        $("#multiTripSearch").show();
        $(".flight_tripDirection ul li:first-child").removeClass("active");
        $(".flight_tripDirection ul li:nth-child(2)").removeClass("active");
        $(".flight_tripDirection ul li:nth-child(3)").addClass("active");
    });

    $("#airlineBooking").click(function() {
        $(".flightSearchPanel_home").show();
        $(".hotelSearchPanel_home").hide();
        $(".holidaysSearchPanel_home").hide();
        $(".transfersSearchPanel_home").hide();
        $(".insuranceSearchPanel_home").hide();
        $(".theme_modules ul li:first-child").addClass("active");
        $(".theme_modules ul li:nth-child(2)").removeClass("active");
        $(".theme_modules ul li:nth-child(3)").removeClass("active");
        $(".theme_modules ul li:nth-child(5)").removeClass("active");
        $(".theme_modules ul li:nth-child(6)").removeClass("active");
    });

    $("#hotelBooking").click(function() {
        $(".flightSearchPanel_home").hide();
        $(".hotelSearchPanel_home").show();
        $(".holidaysSearchPanel_home").hide();
        $(".transfersSearchPanel_home").hide();
        $(".insuranceSearchPanel_home").hide();
        $(".theme_modules ul li:first-child").removeClass("active");
        $(".theme_modules ul li:nth-child(2)").addClass("active");
        $(".theme_modules ul li:nth-child(3)").removeClass("active");
        $(".theme_modules ul li:nth-child(5)").removeClass("active");
        $(".theme_modules ul li:nth-child(6)").removeClass("active");
    });

    $("#holidaysBooking").click(function() {
        $(".flightSearchPanel_home").hide();
        $(".hotelSearchPanel_home").hide();
        $(".holidaysSearchPanel_home").show();
        $(".transfersSearchPanel_home").hide();
        $(".insuranceSearchPanel_home").hide();
        $(".theme_modules ul li:first-child").removeClass("active");
        $(".theme_modules ul li:nth-child(2)").removeClass("active");
        $(".theme_modules ul li:nth-child(3)").addClass("active");
        $(".theme_modules ul li:nth-child(5)").removeClass("active");
        $(".theme_modules ul li:nth-child(6)").removeClass("active");
        $(".theme_modules ul li:nth-child(7)").removeClass("active");
    });

    $("#transfersBooking").click(function() {
        $(".flightSearchPanel_home").hide();
        $(".hotelSearchPanel_home").hide();
        $(".holidaysSearchPanel_home").hide();
        $(".transfersSearchPanel_home").show();
        $(".insuranceSearchPanel_home").hide();
        $(".theme_modules ul li:first-child").removeClass("active");
        $(".theme_modules ul li:nth-child(2)").removeClass("active");
        $(".theme_modules ul li:nth-child(3)").removeClass("active");
        $(".theme_modules ul li:nth-child(5)").removeClass("active");
        $(".theme_modules ul li:nth-child(6)").addClass("active");
        $(".theme_modules ul li:nth-child(7)").removeClass("active");
    });

    $("#insuranceBooking").click(function() {
        $(".flightSearchPanel_home").hide();
        $(".hotelSearchPanel_home").hide();
        $(".holidaysSearchPanel_home").hide();
        $(".transfersSearchPanel_home").hide();
        $(".insuranceSearchPanel_home").show();
        $(".theme_modules ul li:first-child").removeClass("active");
        $(".theme_modules ul li:nth-child(2)").removeClass("active");
        $(".theme_modules ul li:nth-child(3)").removeClass("active");
        $(".theme_modules ul li:nth-child(5)").removeClass("active");
        $(".theme_modules ul li:nth-child(6)").removeClass("active");
        $(".theme_modules ul li:nth-child(7)").addClass("active");
    });

    $("#wayOnetransfers").click(function() {
        $("#oneTransfers").show();
        $("#roundTransfers").hide();
        $(".transfers_tripDirection ul li:first-child").addClass("active");
        $(".transfers_tripDirection ul li:nth-child(2)").removeClass("active");
    });

    $("#wayTwotransfers").click(function() {
        $("#oneTransfers").hide();
        $("#roundTransfers").show();
        $(".transfers_tripDirection ul li:first-child").removeClass("active");
        $(".transfers_tripDirection ul li:nth-child(2)").addClass("active");
    });
});

//Scroll to top
jQuery(document).ready(function() {
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 200) {
            jQuery(".scrollToTop").fadeIn(duration);
        } else {
            jQuery(".scrollToTop").fadeOut(duration);
        }
    });

    jQuery(".scrollToTop").click(function(event) {
        event.preventDefault();
        jQuery("html").animate({
                scrollTop: 0,
            },
            duration
        );
        return false;
    });
});

//header fixed
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

$("#user-nav-tabs li").on("click", function(e) {
    var targetLink = $(e.currentTarget.children[0]).attr("href").slice(1);

    var content_map = {
        Flight: "#content1",
        Hotel: "#content2",
    };

    $(e.currentTarget).siblings().removeClass("active");

    $.each(content_map, function(hash, elid) {
        if (hash == targetLink) {
            $(elid).show();
            $(e.currentTarget).addClass("active");
        } else {
            $(elid).hide();
        }
    });
});

$("#mobairlineBooking").click(function() {
        $(".flightSearchPanel_home").show();
        $(".hotelSearchPanel_home").hide();
        $(".holidaysSearchPanel_home").hide();
        $(".transfersSearchPanel_home").hide();
        $(".insuranceSearchPanel_home").hide();
        $("#mobairlineBooking").addClass("active");
        $("#mobhotelBooking").removeClass("active");
        $("#mobholidaysBooking").removeClass("active");
        $("#mobtransfersBooking").removeClass("active");
        $("#mobinsuranceBooking").removeClass("active");
    });

    $("#mobhotelBooking").click(function() {
        $(".flightSearchPanel_home").hide();
        $(".hotelSearchPanel_home").show();
        $(".holidaysSearchPanel_home").hide();
        $(".transfersSearchPanel_home").hide();
        $(".insuranceSearchPanel_home").hide();
        $("#mobairlineBooking").removeClass("active");
        $("#mobhotelBooking").addClass("active");
        $("#mobholidaysBooking").removeClass("active");
        $("#mobtransfersBooking").removeClass("active");
        $("#mobinsuranceBooking").removeClass("active");
    });

    $("#mobholidaysBooking").click(function() {
        $(".flightSearchPanel_home").hide();
        $(".hotelSearchPanel_home").hide();
        $(".holidaysSearchPanel_home").show();
        $(".transfersSearchPanel_home").hide();
        $(".insuranceSearchPanel_home").hide();
        $("#mobairlineBooking").removeClass("active");
        $("#mobhotelBooking").removeClass("active");
        $("#mobholidaysBooking").addClass("active");
        $("#mobtransfersBooking").removeClass("active");
        $("#mobinsuranceBooking").removeClass("active");
    });

    $("#mobtransfersBooking").click(function() {
        $(".flightSearchPanel_home").hide();
        $(".hotelSearchPanel_home").hide();
        $(".holidaysSearchPanel_home").hide();
        $(".transfersSearchPanel_home").show();
        $(".insuranceSearchPanel_home").hide();
        $("#mobairlineBooking").removeClass("active");
        $("#mobhotelBooking").removeClass("active");
        $("#mobholidaysBooking").removeClass("active");
        $("#mobtransfersBooking").addClass("active");
        $("#mobinsuranceBooking").removeClass("active");
    });

    $("#mobinsuranceBooking").click(function() {
        $(".flightSearchPanel_home").hide();
        $(".hotelSearchPanel_home").hide();
        $(".holidaysSearchPanel_home").hide();
        $(".transfersSearchPanel_home").hide();
        $(".insuranceSearchPanel_home").show();
        $("#mobairlineBooking").removeClass("active");
        $("#mobhotelBooking").removeClass("active");
        $("#mobholidaysBooking").removeClass("active");
        $("#mobtransfersBooking").removeClass("active");
        $("#mobinsuranceBooking").addClass("active");
    });