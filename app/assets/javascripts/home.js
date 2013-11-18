var Flags = {
	populateAllCountries: function() {
		$('.f32').show();
	},
	resetAllCountries: function() {
		$('.f32').hide();
	},
	showMoreCountries: function() {
		// only shows the first 20 countries currently
		Flags.resetAllCountries();
		var i = 5;
		for (; i < 25;) {
			$('.f32:nth-child(' + i + ')').show();
			i += 1;
		}
	},
	showSelectedCountry: function(e) {
		// TODO: get rid of query string in URL
		var nation = $('#country-name-field').val();
		$('#country-name-field').val('');
		e.preventDefault();
		Flags.resetAllCountries();
		$('.f32:contains(' + nation + ')').show();
	},
	infiniteScroll: function() {

	}
};

$(document).ready(function() {
	$('#show-all-btn').click(Flags.populateAllCountries);
	$('#reset-btn').click(Flags.resetAllCountries);
	$('#show-twenty-more-btn').click(Flags.showMoreCountries);
	$('#find-flag-btn').click(Flags.showSelectedCountry);
	$(window).scroll(Flags.infiniteScroll);
});