<script>
import { QInput } from 'quasar'

export default {
  mixins: [QInput],
  props: {
    type: {
      validator: function () {
        return 'color'
      }
    }
  }
}
</script>
