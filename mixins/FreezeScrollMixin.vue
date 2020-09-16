<script>
export default {
  data() {
    return {
      isScrollFrozen: false,
    };
  },
  methods: {
    freezeScroll(options = {}) {
      this.$nextTick(() => {
        const html = document.querySelector('html');
        const { position } = getComputedStyle(html);
        const scrollTop = html.scrollTop || document.body.scrollTop;

        if (position === 'fixed') {
          return;
        }

        html.style.position = 'fixed';
        html.style.top = `-${scrollTop}px`;
        html.style.right = 0;
        html.style.bottom = 0;
        html.style.left = 0;

        if (options.removeScrollShift) {
          const scrollWidth = this.getScrollWidth();

          html.style.overflowY = 'hidden';
          html.style.paddingRight = `${scrollWidth}px`;
        } else {
          html.style.overflowY = 'scroll';
        }

        this.isScrollFrozen = true;
      });
    },
    unfreezeScroll() {
      this.$nextTick(() => {
        const html = document.querySelector('html');
        const { position, top } = getComputedStyle(html);
        const scrollTop = Math.abs(parseInt(top, 10));

        if (position !== 'fixed') {
          return;
        }

        html.style.position = '';
        html.style.top = '';
        html.style.right = '';
        html.style.bottom = '';
        html.style.left = '';
        html.style.overflowY = '';
        html.scrollTop = scrollTop;
        html.style.paddingRight = '';

        // Fix scrollTop bug in safari
        if (html.scrollTop === 0) {
          document.body.scrollTop = scrollTop;
        }

        this.isScrollFrozen = false;
      });
    },
    getScrollWidth() {
      if (!process.client || !window) return;

      const el = document.createElement('div');

      el.style.width = '50px';
      el.style.height = '50px';
      el.style.overflowY = 'scroll';
      el.style.visibility = 'hidden';

      document.body.appendChild(el);

      const scrollWidth = el.offsetWidth - el.clientWidth;

      document.body.removeChild(el);

      return scrollWidth;
    },
  },
};
</script>
