/**
 * Created by Jenrry on 11/17/16
 * Function name: isViewPort 
 * Description: Detects if the element X is inside viewPort
 * 
 */

jQuery.fn.extend({
    isInViewPort: function(offset) {
        const $w = jQuery(window);
        const $this = jQuery(this);

        if ( !offset ) offset=0;

        const viewPortTop = $w.scrollTop();
        const viewPortBottom = viewPortTop + $w.height() + offset;

        const eTop = $this.offset().top;
        const eBotom = eTop + $this.height();
        return (
            eTop < viewPortBottom //The top of the element is INSIDE (less than) the viewPort bottom limit
            &&
            eBotom > viewPortTop // the element isnt outside of the viewport.
        );
    }
});