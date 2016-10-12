/**
 *
 * @package phpBB Extension - mChat Icons Menu
 * @copyright (c) 2016 kasimi
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 *
 */

jQuery(function ($) {
	"use strict";
	var $container = $('.dropdown-container-mchat-message-icons');
	$container.on('click', 'a', function() {
		$container.removeClass('dropdown-visible');
		$(this).closest('.dropdown').toggle();
	});
});
