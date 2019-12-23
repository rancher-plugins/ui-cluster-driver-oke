"use strict";

define("shared/components/cluster-driver/driver-oke/component", ["exports", "shared/mixins/cluster-driver"], function (exports, _clusterDriver) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var LAYOUT = 'PHNlY3Rpb24gY2xhc3M9Imhvcml6b250YWwtZm9ybSI+CgogIHt7I2FjY29yZGlvbi1saXN0IHNob3dFeHBhbmRBbGw9ZmFsc2UgYXMgfCBhbCBleHBhbmRGbiB8fX0KICB7eyNhY2NvcmRpb24tbGlzdC1pdGVtIHRpdGxlPWFjY2Vzc1RpdGxlCiAgICBkZXRhaWw9YWNjZXNzRGV0YWlsCiAgICBleHBhbmRBbGw9ZXhwYW5kQWxsCiAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikKICAgIGV4cGFuZE9uSW5pdD10cnVlCiAgfX0KCiAgPGRpdiBjbGFzcz0icm93Ij4KICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYgbWItMCI+CiAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcub2tlLnRlbmFuY3lPQ0lELmxhYmVsJ319e3tmaWVsZC1yZXF1aXJlZH19PC9sYWJlbD4KICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT0oZXEgbW9kZSAibmV3IikgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcudGVuYW5jeUlkfX0KICAgICAge3tpbnB1dCB0eXBlPSJ0ZXh0IiBuYW1lPSJ0ZW5hbmN5IiBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3Lm9rZS50ZW5hbmN5T0NJRC5wbGFjZWhvbGRlcicpIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLnRlbmFuY3lJZH19CiAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgPC9kaXY+CgoKICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYgbWItMCI+CiAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcub2tlLmNvbXBhcnRtZW50T0NJRC5sYWJlbCd9fXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KGVxIG1vZGUgIm5ldyIpIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLmNvbXBhcnRtZW50SWR9fQogICAgICB7e2lucHV0IHR5cGU9InRleHQiIG5hbWU9ImNvbXBhcnRtZW50IiBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3Lm9rZS5jb21wYXJ0bWVudE9DSUQucGxhY2Vob2xkZXInKSB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy5jb21wYXJ0bWVudElkfX0KICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICA8L2Rpdj4KCiAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5va2UucmVnaW9uLmxhYmVsJ319e3tmaWVsZC1yZXF1aXJlZH19PC9sYWJlbD4KICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT0oZXEgbW9kZSAibmV3IikgdmFsdWU9c2VsZWN0ZWRSZWdpb259fQogICAgICB7e3NlYXJjaGFibGUtc2VsZWN0IGNsYXNzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXJlZ2lvbkNob2ljZXMKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLnJlZ2lvbgogICAgICAgIH19CiAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgPC9kaXY+CgogIDwvZGl2PgoKICA8ZGl2IGNsYXNzPSJyb3ciPgoKICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdjbHVzdGVyTmV3Lm9rZS51c2VyT2NpZC5sYWJlbCd9fXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KG9yIChlcSBtb2RlICJuZXciKSBlcSBtb2RlICJlZGl0aW5nIikgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcudXNlck9jaWR9fQogICAgICB7e2lucHV0IHR5cGU9InRleHQiIG5hbWU9InVzZXJuYW1lIiBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3Lm9rZS51c2VyT2NpZC5wbGFjZWhvbGRlcicpIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLnVzZXJPY2lkfX0KICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICA8L2Rpdj4KCiAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5va2UudXNlckZpbmdlcnByaW50LmxhYmVsJ319e3tmaWVsZC1yZXF1aXJlZH19PC9sYWJlbD4KICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT0ob3IgKGVxIG1vZGUgIm5ldyIpIGVxIG1vZGUgImVkaXRpbmciKSB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy5maW5nZXJwcmludH19CiAgICAgIHt7aW5wdXQgdHlwZT0idGV4dCIgbmFtZT0iZmluZ2VycHJpbnQiIGNsYXNzTmFtZXM9ImZvcm0tY29udHJvbCIgcGxhY2Vob2xkZXI9KHQgJ2NsdXN0ZXJOZXcub2tlLnVzZXJGaW5nZXJwcmludC5wbGFjZWhvbGRlcicpIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLmZpbmdlcnByaW50fX0KICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICA8L2Rpdj4KCiAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5va2Uuc2VjcmV0S2V5UGFzc3BocmFzZS5sYWJlbCd9fTwvbGFiZWw+CiAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KG9yIChlcSBtb2RlICJuZXciKSBlcSBtb2RlICJlZGl0aW5nIikgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcucHJpdmF0ZUtleVBhc3NwaHJhc2V9fQogICAgICB7e2lucHV0IHR5cGU9InBhc3N3b3JkIiBuYW1lPSJwYXNzd29yZCIgY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIiBjb25jZWFsVmFsdWU9dHJ1ZSBwbGFjZWhvbGRlcj0odCAnY2x1c3Rlck5ldy5va2Uuc2VjcmV0S2V5UGFzc3BocmFzZS5wbGFjZWhvbGRlcicpIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLnByaXZhdGVLZXlQYXNzcGhyYXNlfX0KICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICA8L2Rpdj4KCiAgPC9kaXY+CiAgPGRpdiBjbGFzcz0icm93Ij4KCiAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwgcHQtNSI+e3t0ICJjbHVzdGVyTmV3Lm9rZS5zZWNyZXRLZXkubGFiZWwifX17e2ZpZWxkLXJlcXVpcmVkfX08L2xhYmVsPgogICAgPC9kaXY+CiAgICB7e2lucHV0LXRleHQtZmlsZQogICAgICAgIGNsYXNzTmFtZXM9ImJveCIKICAgICAgICB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy5wcml2YXRlS2V5Q29udGVudHMKICAgICAgICBtdWx0aXBsZT1GYWxzZQogICAgICAgIGNhbkNoYW5nZU5hbWU9ZmFsc2UKICAgICAgICBhY2NlcHQ9InRleHQvcGxhaW4sLnBlbSwucGtleSwua2V5IgogICAgICAgIG1pbkhlaWdodD00MAogICAgICAgIHBsYWNlaG9sZGVyPSJjbHVzdGVyTmV3Lm9rZS5zZWNyZXRLZXkucGxhY2Vob2xkZXIiCiAgICAgICAgc2hvdWxkQ2hhbmdlTmFtZT1mYWxzZQogICAgICAgIGNvbmNlYWxWYWx1ZT10cnVlCiAgICAgIH19CiAgICAKICA8L2Rpdj4KICB7ey9hY2NvcmRpb24tbGlzdC1pdGVtfX0KCgogIHt7I2lmIChhbmQgcmVmcmVzaCAoZXEgc3RlcCAxKSl9fQogIHt7c2F2ZS1jYW5jZWwgZWRpdGluZz0oZXEgbW9kZSAnZWRpdCcpCiAgICAgICAgc2F2ZT0iYXV0aGVudGljYXRlT0NJIgogICAgICAgIGNhbmNlbD1jbG9zZQogICAgICAgIHNhdmVEaXNhYmxlZD1jYW5BdXRoZW50aWNhdGUKICAgICAgICBjcmVhdGVMYWJlbD0iY2x1c3Rlck5ldy5va2UuYWNjZXNzLm5leHQiCiAgICAgICAgc2F2aW5nTGFiZWw9ImNsdXN0ZXJOZXcub2tlLmFjY2Vzcy5sb2FkaW5nIgogICAgfX0KICB7ey9pZn19CgogIHt7I2lmIChhbmQgKGd0ZSBzdGVwIDIpIChlcSBtb2RlICdlZGl0JykpfX0KICB7eyNhY2NvcmRpb24tbGlzdC1pdGVtIHRpdGxlPWNsdXN0ZXJUaXRsZQogICAgICAgIGRldGFpbD1jbHVzdGVyRGV0YWlsCiAgICAgICAgc2hvd0V4cGFuZD1mYWxzZQogICAgICAgIGV4cGFuZE9uSW5pdD10cnVlCiAgICAgICAgZXhwYW5kQWxsPWFsLmV4cGFuZEFsbAogICAgICAgIGV4cGFuZD0oYWN0aW9uIGV4cGFuZEZuKQogICAgICB9fQogIDxkaXYgY2xhc3M9InJvdyI+CgogICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNCI+CiAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcub2tlLnZlcnNpb24ubGFiZWwnfX08L2xhYmVsPgogICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShvciAoZXEgbW9kZSAibmV3IikgZXEgbW9kZSAiZWRpdGluZyIpIHZhbHVlPXNlbGVjdGVkazhzVmVyc2lvbn19CiAgICAgIHt7bmV3LXNlbGVjdCBjbGFzcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PWs4c1VwZ3JhZGVWZXJzaW9uQ2hvaWNlcwogICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy5rdWJlcm5ldGVzVmVyc2lvbgogICAgICAgICAgICAgIH19CiAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgPC9kaXY+CgoKICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTQiPgogICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdjbHVzdGVyTmV3Lm9rZS5xdWFudGl0eVBlclN1Ym5ldC5sYWJlbCd9fTwvbGFiZWw+CiAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KG9yIChlcSBtb2RlICJuZXciKSBlcSBtb2RlICJlZGl0aW5nIikgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcucXVhbnRpdHlQZXJTdWJuZXR9fQogICAgICB7e2lucHV0LWludGVnZXIgbWluPTEgbWF4PW1heE5vZGVDb3VudCB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy5xdWFudGl0eVBlclN1Ym5ldCBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3Lm9rZS5xdWFudGl0eVBlclN1Ym5ldC5wbGFjZWhvbGRlcicpfX0KICAgICAgPHAgY2xhc3M9ImhlbHAtYmxvY2siPgogICAgICAgIHt7dCAnY2x1c3Rlck5ldy5va2UucXVhbnRpdHlQZXJTdWJuZXQuaGVscCd9fQogICAgICA8L3A+CiAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgPC9kaXY+CgogIDwvZGl2PgoKICB7ey9hY2NvcmRpb24tbGlzdC1pdGVtfX0KCiAge3shLS0gZXhpdCBwb2ludCBmb3IgdXBkYXRlL3VwZ3JhZGUgLS19fQogIHt7I2lmIHJlZnJlc2h9fQogIHt7c2F2ZS1jYW5jZWwgZWRpdGluZz0oZXEgbW9kZSAnZWRpdCcpCiAgICAgICAgICAgIHNhdmU9InVwZ3JhZGVDbHVzdGVyIgogICAgICAgICAgICBjYW5jZWw9Y2xvc2UKICAgICAgICB9fQogIHt7L2lmfX0KCiAge3tlbHNlfX0KICB7eyNpZiAoZ3RlIHN0ZXAgMil9fQogIHt7I2FjY29yZGlvbi1saXN0LWl0ZW0gdGl0bGU9Y2x1c3RlclRpdGxlCiAgICAgICAgZGV0YWlsPWNsdXN0ZXJEZXRhaWwKICAgICAgICBzaG93RXhwYW5kPWZhbHNlCiAgICAgICAgZXhwYW5kT25Jbml0PXRydWUKICAgICAgICBleHBhbmRBbGw9YWwuZXhwYW5kQWxsCiAgICAgICAgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pCiAgICAgIH19CgogIDxkaXYgY2xhc3M9InJvdyI+CiAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02IG1iLTAiPgogICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdjbHVzdGVyTmV3Lm9rZS52ZXJzaW9uLmxhYmVsJ319PC9sYWJlbD4KICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT0oYW5kIChlcSBzdGVwIDIpIGlzTmV3KSB2YWx1ZT1zZWxlY3RlZGs4c1ZlcnNpb259fQogICAgICB7e25ldy1zZWxlY3QgY2xhc3M9ImZvcm0tY29udHJvbCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1rOHNWZXJzaW9uQ2hvaWNlcwogICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy5rdWJlcm5ldGVzVmVyc2lvbgogICAgICAgICAgICAgIH19CiAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgPC9kaXY+CgogICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiBtYi0wIj4KICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5va2UucXVhbnRpdHlQZXJTdWJuZXQubGFiZWwnfX08L2xhYmVsPgogICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShhbmQgKGVxIHN0ZXAgMikgaXNOZXcpIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLnF1YW50aXR5UGVyU3VibmV0fX0KICAgICAge3tpbnB1dC1pbnRlZ2VyIG1pbj0xIG1heD1tYXhOb2RlQ291bnQgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcucXVhbnRpdHlQZXJTdWJuZXQgY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIiBwbGFjZWhvbGRlcj0odCAnY2x1c3Rlck5ldy5va2UucXVhbnRpdHlQZXJTdWJuZXQucGxhY2Vob2xkZXInKX19CiAgICAgIDxwIGNsYXNzPSJoZWxwLWJsb2NrIj4KICAgICAgICB7e3QgJ2NsdXN0ZXJOZXcub2tlLnF1YW50aXR5UGVyU3VibmV0LmhlbHAnfX0KICAgICAgPC9wPgogICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgIDwvZGl2PgoKICA8L2Rpdj4KICB7ey9hY2NvcmRpb24tbGlzdC1pdGVtfX0KICB7eyNpZiAoYW5kIHJlZnJlc2ggKGVxIHN0ZXAgMikpfX0KICB7e3NhdmUtY2FuY2VsIGVkaXRpbmc9KGVxIG1vZGUgJ2VkaXQnKQogICAgICAgICAgICBzYXZlPSJsb2FkTm9kZUNvbmZpZyIKICAgICAgICAgICAgY2FuY2VsPWNsb3NlCiAgICAgICAgICAgIGNyZWF0ZUxhYmVsPSJjbHVzdGVyTmV3Lm9rZS5jbHVzdGVyLm5leHQiCiAgICAgICAgICAgIHNhdmluZ0xhYmVsPSJjbHVzdGVyTmV3Lm9rZS5jbHVzdGVyLmxvYWRpbmciCiAgICAgICAgfX0KICB7ey9pZn19CiAge3svaWZ9fQogIHt7I2lmIChndGUgc3RlcCAzKX19CiAge3sjYWNjb3JkaW9uLWxpc3QtaXRlbSB0aXRsZT12aXJ0dWFsQ2xvdWROZXR3b3JrVGl0bGUKICAgICAgICAgIGRldGFpbD12aXJ0dWFsQ2xvdWROZXR3b3JrRGV0YWlsCiAgICAgICAgICBzaG93RXhwYW5kPWZhbHNlCiAgICAgICAgICBleHBhbmRPbkluaXQ9dHJ1ZQogICAgICAgICAgZXhwYW5kQWxsPWFsLmV4cGFuZEFsbAogICAgICAgICAgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pCiAgICAgIH19CgoKICA8ZGl2IGNsYXNzPSJyb3ciPgoKICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICB7eyNpbnB1dC1vci1kaXNwbGF5CiAgICAgICAgIGVkaXRhYmxlPShub3QtZXEgbW9kZSAidmlldyIpCiAgICAgICAgIHZhbHVlPShpZiB2Y25DcmVhdGlvbk1vZGUgKHQgImdlbmVyaWMuZW5hYmxlZCIpICh0ICJnZW5lcmljLmRpc2FibGVkIikpCiAgICAgIH19CiAgICAgIDxkaXYgY2xhc3M9InJhZGlvIj4KICAgICAgICA8bGFiZWw+CiAgICAgICAgICB7e3JhZGlvLWJ1dHRvbgogICAgICAgICAgICAgIHNlbGVjdGlvbj12Y25DcmVhdGlvbk1vZGUKICAgICAgICAgICAgICB2YWx1ZT0iUXVpY2siCiAgICAgICAgICAgICAgZGlzYWJsZWQ9KGlmIG11bHRpcGxlUmVnaXN0cmllcyB0cnVlIGZhbHNlKQogICAgICAgICAgICB9fQogICAgICAgICAge3t0ICdjbHVzdGVyTmV3Lm9rZS5zdWJuZXRBY2Nlc3NPcHRpb25zLnF1aWNrJ319CiAgICAgICAgPC9sYWJlbD4KICAgICAgPC9kaXY+CiAgICAgIDxkaXYgY2xhc3M9InJhZGlvIj4KICAgICAgICA8bGFiZWw+CiAgICAgICAgICB7e3JhZGlvLWJ1dHRvbgogICAgICAgICAgICAgIHNlbGVjdGlvbj12Y25DcmVhdGlvbk1vZGUKICAgICAgICAgICAgICB2YWx1ZT0iRXhpc3RpbmciCiAgICAgICAgICAgICAgZGlzYWJsZWQ9KGlmIG11bHRpcGxlUmVnaXN0cmllcyB0cnVlIGZhbHNlKQogICAgICAgICAgICB9fQogICAgICAgICAge3t0ICdjbHVzdGVyTmV3Lm9rZS5zdWJuZXRBY2Nlc3NPcHRpb25zLmV4aXN0aW5nJ319CiAgICAgICAgPC9sYWJlbD4KICAgICAgPC9kaXY+CiAgICAgIDxkaXYgY2xhc3M9InJhZGlvIj4KICAgICAgICA8bGFiZWw+CiAgICAgICAgICB7e3JhZGlvLWJ1dHRvbgogICAgICAgICAgICAgIHNlbGVjdGlvbj12Y25DcmVhdGlvbk1vZGUKICAgICAgICAgICAgICB2YWx1ZT0iQ3VzdG9tIgogICAgICAgICAgICAgIGRpc2FibGVkPShpZiBtdWx0aXBsZVJlZ2lzdHJpZXMgdHJ1ZSBmYWxzZSkKICAgICAgICAgICAgfX0KICAgICAgICAgIHt7dCAnY2x1c3Rlck5ldy5va2Uuc3VibmV0QWNjZXNzT3B0aW9ucy5jdXN0b20nfX0KICAgICAgICA8L2xhYmVsPgogICAgICA8L2Rpdj4KCiAgICAgIHt7I2lmIChlcSB2Y25DcmVhdGlvbk1vZGUgIkN1c3RvbSIpfX0KICAgICAgPGRpdiBjbGFzcz0icm93Ij4KICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcub2tlLnN1Ym5ldC5sYWJlbCd9fXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShhbmQgKGVxIHN0ZXAgMykgaXNOZXcpIHZhbHVlPXNlbGVjdGVkU3VibmV0fX0KICAgICAgICAgIHt7c2VhcmNoYWJsZS1zZWxlY3QgY2xhc3M9ImZvcm0tY29udHJvbCIKICAgICAgICAgICAgICAgIGNvbnRlbnQ9c3VibmV0QWNjZXNzQ2hvaWNlcwogICAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcuc3VibmV0QWNjZXNzCiAgICAgICAgICAgICAgfX0KICAgICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICAgIDwvZGl2PgoKICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcub2tlLmNpZHIubGFiZWwnfX08L2xhYmVsPgogICAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT0oYW5kIChlcSBzdGVwIDMpIGlzTmV3KSB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy52Y25DaWRyfX0KICAgICAgICAgIHt7aW5wdXQgdHlwZT0idGV4dCIgY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIiBwbGFjZWhvbGRlcj0odCAnY2x1c3Rlck5ldy5va2UuY2lkci5wbGFjZWhvbGRlcicpIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLnZjbkNpZHJ9fQogICAgICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICAgICAgPC9kaXY+CiAgICAgIDwvZGl2PgogICAgICB7ey9pZn19CgogICAgICB7eyNpZiAoZXEgdmNuQ3JlYXRpb25Nb2RlICJFeGlzdGluZyIpfX0KICAgICAgPGRpdiBjbGFzcz0icm93Ij4KICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcub2tlLmV4aXN0aW5nVkNORGV0YWlscy5jb21wYXJ0bWVudE9DSUQnfX08L2xhYmVsPgogICAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT0oYW5kIChlcSBzdGVwIDMpIGlzTmV3KSB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy52Y25Db21wYXJ0bWVudElkfX0KICAgICAgICAgIHt7aW5wdXQgdHlwZT0idGV4dCIgY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIiBwbGFjZWhvbGRlcj0odCAnY2x1c3Rlck5ldy5va2UuZXhpc3RpbmdWQ05EZXRhaWxzLmNvbXBhcnRtZW50T0NJRFBsYWNlaG9sZGVyJykgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcudmNuQ29tcGFydG1lbnRJZH19CiAgICAgICAgICA8cCBjbGFzcz0iaGVscC1ibG9jayI+e3t0ICJjbHVzdGVyTmV3Lm9rZS5leGlzdGluZ1ZDTkRldGFpbHMuY29tcGFydG1lbnRPQ0lESGVscCIgfX08L3A+CiAgICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgICA8L2Rpdj4KCiAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdjbHVzdGVyTmV3Lm9rZS5leGlzdGluZ1ZDTkRldGFpbHMudmNuTmFtZSd9fXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShhbmQgKGVxIHN0ZXAgMykgaXNOZXcpIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLnZjbk5hbWV9fQogICAgICAgICAge3tpbnB1dCB0eXBlPSJ0ZXh0IiBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3Lm9rZS5leGlzdGluZ1ZDTkRldGFpbHMudmNuTmFtZVBsYWNlaG9sZGVyJykgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcudmNuTmFtZX19CiAgICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgICA8L2Rpdj4KICAgICAgPC9kaXY+CiAgICAgIDxkaXYgY2xhc3M9InJvdyI+CiAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdjbHVzdGVyTmV3Lm9rZS5leGlzdGluZ1ZDTkRldGFpbHMubGJTdWJuZXROYW1lMSd9fXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShhbmQgKGVxIHN0ZXAgMykgaXNOZXcpIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLmxvYWRCYWxhbmNlclN1Ym5ldE5hbWUxfX0KICAgICAgICAgIHt7aW5wdXQgdHlwZT0idGV4dCIgY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIiBwbGFjZWhvbGRlcj0odCAnY2x1c3Rlck5ldy5va2UuZXhpc3RpbmdWQ05EZXRhaWxzLmxiU3VibmV0TmFtZTFQbGFjZWhvbGRlcicpIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLmxvYWRCYWxhbmNlclN1Ym5ldE5hbWUxfX0KICAgICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICAgIDwvZGl2PgoKICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcub2tlLmV4aXN0aW5nVkNORGV0YWlscy5sYlN1Ym5ldE5hbWUyJ319PC9sYWJlbD4KICAgICAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KGFuZCAoZXEgc3RlcCAzKSBpc05ldykgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcubG9hZEJhbGFuY2VyU3VibmV0TmFtZTJ9fQogICAgICAgICAge3tpbnB1dCB0eXBlPSJ0ZXh0IiBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3Lm9rZS5leGlzdGluZ1ZDTkRldGFpbHMubGJTdWJuZXROYW1lMlBsYWNlaG9sZGVyJykgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcubG9hZEJhbGFuY2VyU3VibmV0TmFtZTJ9fQogICAgICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICAgICAgPC9kaXY+CgogICAgICA8L2Rpdj4KICAgICAge3svaWZ9fQogICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgIDwvZGl2PgoKICA8L2Rpdj4KCiAge3svYWNjb3JkaW9uLWxpc3QtaXRlbX19CiAge3sjaWYgKGFuZCByZWZyZXNoIChlcSBzdGVwIDMpKX19CiAge3tzYXZlLWNhbmNlbCBlZGl0aW5nPShlcSBtb2RlICdlZGl0JykKICAgICAgICAgICAgc2F2ZT0ibG9hZEluc3RhbmNlQ29uZmlnIgogICAgICAgICAgICBjYW5jZWw9Y2xvc2UKICAgICAgICAgICAgc2F2ZURpc2FibGVkPWNhblNhdmVWQ04KICAgICAgICAgICAgY3JlYXRlTGFiZWw9ImNsdXN0ZXJOZXcub2tlLm5vZGUubmV4dCIKICAgICAgICAgICAgc2F2aW5nTGFiZWw9ImNsdXN0ZXJOZXcub2tlLm5vZGUubG9hZGluZyIKICAgICAgICB9fQogIHt7L2lmfX0KICB7ey9pZn19CiAge3sjaWYgKGd0ZSBzdGVwIDQpfX0KICB7eyNhY2NvcmRpb24tbGlzdC1pdGVtIHRpdGxlPWluc3RhbmNlVGl0bGUKICAgICAgICAgIGRldGFpbD1pbnN0YW5jZURldGFpbAogICAgICAgICAgc2hvd0V4cGFuZD1mYWxzZQogICAgICAgICAgZXhwYW5kT25Jbml0PXRydWUKICAgICAgICAgIGV4cGFuZEFsbD1hbC5leHBhbmRBbGwKICAgICAgICAgIGV4cGFuZD0oYWN0aW9uIGV4cGFuZEZuKQogICAgICB9fQogIDxkaXYgY2xhc3M9InJvdyI+CgoKICAgIDxkaXYgY2xhc3M9InJvdyI+CiAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcub2tlLm5vZGVTaGFwZS5sYWJlbCd9fXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT0oYW5kIChlcSBzdGVwIDQpIGlzTmV3KSB2YWx1ZT1zZWxlY3RlZG5vZGVTaGFwZX19CiAgICAgICAge3tzZWFyY2hhYmxlLXNlbGVjdCBjbGFzcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PW5vZGVTaGFwZUNob2ljZXMKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcubm9kZVNoYXBlCiAgICAgICAgICAgICAgICB9fQogICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICA8L2Rpdj4KCiAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcub2tlLm9zLmxhYmVsJ319PC9sYWJlbD4KICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPWlzTmV3IHZhbHVlPXNlbGVjdGVkSW1hZ2V9fQogICAgICAgIHt7c2VhcmNoYWJsZS1zZWxlY3QgY2xhc3M9ImZvcm0tY29udHJvbCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1pbWFnZUNob2ljZXMKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcubm9kZUltYWdlCiAgICAgICAgICAgICAgICB9fQogICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICA8L2Rpdj4KCiAgICA8L2Rpdj4KCiAgICA8ZGl2IGNsYXNzPSJyb3ciPgoKICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNCI+CiAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwgcHQtNSI+e3t0ICJjbHVzdGVyTmV3Lm9rZS5ub2RlU1NIS2V5LmxhYmVsIn19PC9sYWJlbD4KICAgICAgPC9kaXY+CiAgICAgIHt7aW5wdXQtdGV4dC1maWxlCiAgICAgICAgY2xhc3NOYW1lcz0iYm94IgogICAgICAgIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLm5vZGVQdWJsaWNLZXlDb250ZW50cwogICAgICAgIG11bHRpcGxlPUZhbHNlCiAgICAgICAgY2FuQ2hhbmdlTmFtZT1mYWxzZQogICAgICAgIGFjY2VwdD0idGV4dC9wbGFpbiwucGVtLC5wdWIsLmtleSIKICAgICAgICBtaW5IZWlnaHQ9NDAKICAgICAgICBwbGFjZWhvbGRlcj0iY2x1c3Rlck5ldy5va2Uubm9kZVNTSEtleS5wbGFjZWhvbGRlciIKICAgICAgICBzaG91bGRDaGFuZ2VOYW1lPWZhbHNlCiAgICAgICAgY29uY2VhbFZhbHVlPWZhbHNlCiAgICAgIH19CgogICAgPC9kaXY+CgoKCiAgPC9kaXY+CgogIHt7L2FjY29yZGlvbi1saXN0LWl0ZW19fQogIHt7I2lmIChhbmQgcmVmcmVzaCAoZXEgc3RlcCA0KSl9fQogIHt7c2F2ZS1jYW5jZWwgZWRpdGluZz0oZXEgbW9kZSAnZWRpdCcpCiAgICAgICAgICBzYXZlRGlzYWJsZWQ9Y2FuQ3JlYXRlQ2x1c3RlcgogICAgICAgICAgc2F2ZT0ic2F2ZSIKICAgICAgICAgIGNhbmNlbD1jbG9zZQogICAgICB9fQogIHt7L2lmfX0KICB7ey9pZn19CiAge3svaWZ9fQoKCiAge3t0b3AtZXJyb3JzIGVycm9ycz1lcnJvcnN9fQogIHt7dG9wLWVycm9ycyBlcnJvcnM9b3RoZXJFcnJvcnN9fQogIHt7dG9wLWVycm9ycyBlcnJvcnM9Y2x1c3RlckVycm9yc319CiAge3svYWNjb3JkaW9uLWxpc3R9fQo8L3NlY3Rpb24+';
  var computed = Ember.computed;
  var equal = Ember.computed.equal;
  var observer = Ember.observer;
  var get = Ember.get;
  var set = Ember.set;
  var setProperties = Ember.setProperties;
  var alias = Ember.computed.alias;
  var service = Ember.inject.service;
  var all = Ember.RSVP.all;
  var next = Ember.run.next;
  var regionMap = {
    'Mumbai': 'ap-mumbai-1',
    'Seoul': 'ap-seoul-1',
    'Tokyo': 'ap-tokyo-1',
    'Toronto': 'ca-toronto-1',
    'Frankfurt': 'eu-frankfurt-1',
    'Zurich': 'eu-zurich-1',
    'Sao Paolo': 'sa-saopaulo-1',
    'London': 'uk-london-1',
    'Ashburn': 'us-ashburn-1',
    'Phoenix': 'us-phoenix-1'
  };
  var k8sVersionMap = {
    'v1.14.8': 'v1.14.8',
    'v1.13.5': 'v1.13.5',
    'v1.12.7': 'v1.12.7'
  };
  var vcnIdMap = {
    quick: 'Quick Create'
  };
  var subnetAccessMap = {
    public: 'Public',
    private: 'Private'
  };

  var nodeShapeMap = _defineProperty({
    'VM.Standard1.1': 'VM.Standard1.1',
    'VM.Standard1.2': 'VM.Standard1.2',
    'VM.Standard1.4': 'VM.Standard1.4',
    'VM.Standard1.8': 'VM.Standard1.8',
    'VM.Standard1.16': 'VM.Standard1.16',
    'VM.Standard2.1': 'VM.Standard2.1',
    'VM.Standard2.2': 'VM.Standard2.2',
    'VM.Standard2.4': 'VM.Standard2.4',
    'VM.Standard2.8': 'VM.Standard2.8',
    'VM.Standard2.16': 'VM.Standard2.16',
    'VM.Standard2.24': 'VM.Standard2.24',
    'BM.Standard.E2.64': 'BM.Standard.E2.64',
    'BM.Standard2.52': 'BM.Standard2.52',
    'BM.Standard.B1.44': 'BM.Standard.B1.44',
    'BM.DenseIO2.52': 'BM.DenseIO2.52',
    'BM.HPC2.36': 'BM.HPC2.36',
    'VM.Standard.E2.1.Micro': 'VM.Standard.E2.1.Micro',
    'VM.Standard.E2.2': 'VM.Standard.E2.2',
    'VM.GPU2.1': 'VM.GPU2.1',
    'VM.GPU2.2': 'VM.GPU2.2',
    'VM.GPU3.1': 'VM.GPU3.1',
    'VM.GPU3.2': 'VM.GPU3.2',
    'VM.GPU3.4': 'VM.GPU3.4'
  }, "VM.GPU3.4", 'VM.GPU3.8');

  var imageMap = {
    'Oracle-Linux-7.6': 'Oracle-Linux-7.6',
    'Oracle-Linux-7.5': 'Oracle-Linux-7.5',
    'Oracle-Linux-7.4': 'Oracle-Linux-7.4'
  };
  var languages = {
    'en-us': {
      'clusterNew': {
        'oke': {
          'access': {
            'next': 'Next: Authenticate & Configure Cluster',
            'loading': 'Loading values from Oracle Cloud Infrastructure',
            'title': 'OCI Account Configuration',
            'detail': 'Choose the region and API Key that will be used to authenticate and configure Oracle Container Engine.'
          },
          'region': {
            'label': 'Region'
          },
          'tenancyOCID': {
            'label': 'Tenancy OCID',
            'placeholder': 'The OCID of the tenancy in which to create resources',
            'required': 'Tenancy OCID is required'
          },
          'compartmentOCID': {
            'label': 'Compartment OCID',
            'placeholder': 'The OCID of the compartment in which to create the resources',
            'required': 'Compartment OCID is required'
          },
          'userOcid': {
            'label': 'User OCID',
            'placeholder': 'The OCID of a user who has access to the specified tenancy/compartment',
            'required': 'Tenancy OCID is required'
          },
          'userFingerprint': {
            'label': 'User fingerprint',
            'placeholder': "The fingerprint corresponding to the specified user's private API Key",
            'required': 'User private key fingerprint is required'
          },
          'secretKey': {
            'label': 'User Private Key',
            'placeholder': 'The private API key contents for the specified OCI user, in PEM format',
            'provided': 'Provided',
            'required': 'User Private API Key is required'
          },
          'secretKeyPassphrase': {
            'label': 'User Private Key Passphrase',
            'placeholder': 'The passphrase (if any) that protects private key file the specified OCI user',
            'provided': 'Provided'
          },
          'cluster': {
            'title': 'Cluster Configuration',
            'detail': 'Choose the Kubernetes version and the number of nodes per subnet for the cluster.',
            'next': 'Next: Configure Virtual Cloud Network',
            'loading': 'Loading VCNs from Oracle Cloud Infrastructure'
          },
          'vcn': {
            'title': 'Virtual Cloud Network',
            'detail': 'Configure the virtual cloud network that will be used for your Kubernetes cluster.',
            'label': 'Virtual Cloud Network',
            'required': 'VCN is required'
          },
          'version': {
            'label': 'Kubernetes Version',
            'required': 'Kubernetes Version is required'
          },
          'cidr': {
            'label': 'Virtual Cloud Network CIDR',
            'placeholder': 'e.g. 172.16.0.0/16',
            'required': 'Virtual Cloud Network CIDR is required',
            'error': 'Virtual Cloud CIDR format error'
          },
          'existingVCNDetails': {
            'compartmentOCID': 'OCID of the VCN\'s compartment',
            'compartmentOCIDPlaceholder': 'e.g. ocid1.compartment.oc1..aaaaaaaa...',
            'compartmentOCIDHelp': 'leave blank if it\'s the cluster compartment',
            'vcnName': 'Name of the pre-existing VCN',
            'vcnNamePlaceholder': 'e.g. my-vcn',
            'lbSubnetName1': 'Name of first pre-existing LB subnet',
            'lbSubnetName1Placeholder': 'e.g. my-lb-sub-1',
            'lbSubnetName2': 'Name of second pre-existing LB subnet (if applicable)',
            'lbSubnetName2Placeholder': 'e.g. my-lb-sub-2'
          },
          'quantityPerSubnet': {
            'label': 'Nodes Per Subnet Count',
            'placeholder': 'e.g. 1',
            'required': 'Nodes per subnet is required',
            'help': 'The quantity of nodes nodes to run in each worker subnet',
            'error': 'The count of nodes should not be greater than {max}'
          },
          'nodeShape': {
            'label': 'Instance Shape',
            'required': 'Instance Shape is required'
          },
          'nodeSSHKey': {
            'label': 'SSH public key for nodes',
            'placeholder': 'Optional SSH public key for the nodes'
          },
          'instanceConfig': {
            'label': 'Instance Configuration(CPU/Memory)',
            'gpuLabel': 'Instance Configuration(CPU/Memory/GPU Type/GPU Count)',
            'required': 'Instance Configuration is required'
          },
          'subnet': {
            'label': 'Subnet Access',
            'required': 'Subnet access is required'
          },
          'node': {
            'title': 'Node Type',
            'detail': 'Choose the node type that will be used for this Kubernetes cluster',
            'next': 'Next: Configure Node Instances',
            'loading': 'Loading configuration from Oracle Cloud Infrastructure'
          },
          'instance': {
            'title': 'Node Instance Configuration',
            'detail': 'Configure the instance that will be used as nodes in the cluster.'
          },
          'os': {
            'label': 'Operating System'
          },
          'storageType': {
            'label': 'Default Persistent Volume Disk Type'
          },
          'storageSize': {
            'label': 'Default Persistent Volume Disk Size',
            'placeholder': 'e.g. 10',
            'error': 'Default Persistent Volume Disk Size should be greater than 0'
          },
          'localDisk': {
            'label': 'Local Disk',
            'placeholder': '{size} GB(Self-selection is not supported for the time being)'
          },
          'subnetAccessOptions': {
            'quick': 'Quick Create',
            'custom': 'Custom Create',
            'existing': 'Existing'
          }
        }
      }
    }
  };
  exports.default = Ember.Component.extend(_clusterDriver.default, {
    app: service(),
    router: service(),
    session: service(),
    intl: service(),
    driverName: 'oke',
    configField: 'okeEngineConfig',
    layout: null,
    versionChoices: [],
    clusterQuota: null,
    imageChioces: [],
    allImages: [],
    zoneResource: null,
    instanceConfig: '',
    step: 1,
    lanChanged: null,
    refresh: false,
    vcnCreationMode: '',
    isNew: equal('mode', 'new'),
    editing: equal('mode', 'edit'),
    config: alias('cluster.okeEngineConfig'),
    init: function init() {
      var decodedLayout = window.atob(LAYOUT);
      var template = Ember.HTMLBars.compile(decodedLayout, {
        moduleName: 'shared/components/cluster-driver/driver-oke/template'
      });
      set(this, 'layout', template);

      this._super.apply(this, arguments);

      var lang = get(this, 'session.language');
      get(this, 'intl.locale');
      this.loadLanguage(lang);
      var config = get(this, 'cluster.okeEngineConfig');
      var configField = get(this, 'configField');

      if (!config) {
        config = this.get('globalStore').createRecord({
          type: configField,
          secretKey: '',
          clusterName: '',
          vcnCidr: '10.0.0.0/16',
          kubernetesVersion: 'v1.14.8',
          region: 'us-phoenix-1',
          vcn: '',
          securityListId: '',
          subnetAccess: 'public',
          cpu: 0,
          memory: 0,
          quantityPerSubnet: 1
        });
        set(this, 'cluster.okeEngineConfig', config);
      }

      var _get = get(this, 'config'),
          cpu = _get.cpu,
          memory = _get.memory;

      if (cpu && memory) {
        set(this, 'instanceConfig', "".concat(get(this, 'config.cpu'), "/").concat(get(this, 'config.memory')));
      }
    },
    actions: {
      authenticateOCI: function authenticateOCI(cb) {
        setProperties(this, {
          'errors': null,
          'cluster.okeEngineConfig.userOcid': (get(this, 'cluster.okeEngineConfig.userOcid') || '').trim(),
          'cluster.okeEngineConfig.secretKey': (get(this, 'cluster.okeEngineConfig.secretKey') || '').trim(),
          'cluster.okeEngineConfig.privateKeyPassphrase': (get(this, 'cluster.okeEngineConfig.privateKeyPassphrase') || '').trim(),
          'cluster.okeEngineConfig.region': get(this, 'cluster.okeEngineConfig.region')
        });
        var errors = get(this, 'errors') || [];
        set(this, 'step', 2);
        cb(true);
      },
      loadNodeConfig: function loadNodeConfig(cb) {
        set(this, 'step', 3);
        cb(true);
      },
      loadInstanceConfig: function loadInstanceConfig(cb) {
        set(this, 'errors', null);
        set(this, 'step', 4);
        cb(true);
      },
      upgradeCluster: function upgradeCluster(cb) {
        setProperties(this, {
          'errors': null
        });
        var errors = get(this, 'errors') || [];
        var intl = get(this, 'intl');
        var quantityPerSubnet = get(this, 'cluster.okeEngineConfig.quantityPerSubnet');
        var kubernetesVersion = get(this, 'cluster.okeEngineConfig.kubernetesVersion');

        if (!quantityPerSubnet) {
          errors.push(intl.t('clusterNew.oke.quantityPerSubnet.required'));
        } else {
          var maxNodeCount = get(this, 'cluster.okeEngineConfig.maxNodeCount');

          if (!/^\d+$/.test(quantityPerSubnet) || parseInt(quantityPerSubnet, 10) < 0 || parseInt(quantityPerSubnet, 10) > maxNodeCount) {
            errors.push(intl.t('clusterNew.oke.quantityPerSubnet.error', {
              max: maxNodeCount
            }));
          }
        }

        if (!kubernetesVersion) {
          errors.push(intl.t('clusterNew.oke.version.required'));
        }

        if (errors.length > 0) {
          set(this, 'errors', errors);
          cb();
          return;
        }

        this.send('driverSave', cb);
      },
      save: function save(cb) {
        setProperties(this, {
          'errors': null,
          'otherErrors': null,
          'clusterErrors': null
        });
        var errors = get(this, 'errors') || [];

        if (errors.length > 0) {
          set(this, 'errors', errors);
          cb(false);
          return;
        }

        if (!this.validate()) {
          cb(false);
          return;
        }

        if (get(this, 'cluster.okeEngineConfig.nodeImage') == '') {
          set(this, 'cluster.okeEngineConfig.nodeImage', imageMap['Oracle-Linux-7.6']);
        }

        if (get(this, 'cluster.okeEngineConfig.subnetAccess') == 'public') {
          set(this, 'cluster.okeEngineConfig.enablePrivateNodes', false);
        } else {
          set(this, 'cluster.okeEngineConfig.enablePrivateNodes', true);
        }

        this.send('driverSave', cb);
      },
      cancel: function cancel() {
        get(this, 'router').transitionTo('global-admin.clusters.index');
      },
      cpuAndMemoryChanged: function cpuAndMemoryChanged(item) {
        setProperties(this, {
          'config.cpu': item.raw.cpuCount,
          'config.memory': item.raw.memoryCapacityInGB
        });
      }
    },
    languageChanged: observer('intl.locale', function () {
      var lang = get(this, 'intl.locale');

      if (lang) {
        this.loadLanguage(lang[0]);
      }
    }),
    clusterNameChanged: observer('cluster.name', function () {
      var clusterName = get(this, 'cluster.name');
      set(this, 'cluster.okeEngineConfig.clusterName', clusterName);
    }),
    accessTitle: computed('intl.locale', 'lanChanged', function () {
      return get(this, 'intl').t('clusterNew.oke.access.title');
    }),
    accessDetail: computed('intl.locale', 'lanChanged', function () {
      return get(this, 'intl').t('clusterNew.oke.access.detail');
    }),
    clusterTitle: computed('intl.locale', 'lanChanged', function () {
      return get(this, 'intl').t('clusterNew.oke.cluster.title');
    }),
    clusterDetail: computed('intl.locale', 'lanChanged', function () {
      return get(this, 'intl').t('clusterNew.oke.cluster.detail');
    }),
    virtualCloudNetworkTitle: computed('intl.locale', 'lanChanged', function () {
      return get(this, 'intl').t('clusterNew.oke.vcn.title');
    }),
    virtualCloudNetworkDetail: computed('intl.locale', 'lanChanged', function () {
      return get(this, 'intl').t('clusterNew.oke.vcn.detail');
    }),
    instanceTitle: computed('intl.locale', 'lanChanged', function () {
      return get(this, 'intl').t('clusterNew.oke.instance.title');
    }),
    instanceDetail: computed('intl.locale', 'lanChanged', function () {
      return get(this, 'intl').t('clusterNew.oke.instance.detail');
    }),
    maxNodeCount: computed('clusterQuota.slave', function () {
      return 256;
    }),
    regionChoices: Object.entries(regionMap).map(function (e) {
      return {
        label: e[0],
        value: e[1]
      };
    }),
    selectedRegion: computed('cluster.okeEngineConfig.region', function () {
      var region = get(this, 'cluster.okeEngineConfig.region');
      return region;
    }),
    vcnChoices: Object.entries(vcnIdMap).map(function (e) {
      return {
        label: e[1],
        value: e[0]
      };
    }),
    selectedVCN: computed('cluster.okeEngineConfig.vcnId', function () {
      var vcnId = get(this, 'cluster.okeEngineConfig.vcnId');
      return vcnId && vcnIdMap[vcnId];
    }),
    subnetAccessChoices: Object.entries(subnetAccessMap).map(function (e) {
      return {
        label: e[1],
        value: e[0]
      };
    }),
    selectedSubnetAccess: computed('cluster.okeEngineConfig.subnetAccess', function () {
      var subnetAccess = get(this, 'cluster.okeEngineConfig.subnetAccess');
      return subnetAccess && subnetAccessMap[subnetAccess];
    }),
    nodeShapeChoices: Object.entries(nodeShapeMap).map(function (e) {
      return {
        label: e[1],
        value: e[0]
      };
    }),
    selectednodeShape: computed('cluster.okeEngineConfig.nodeShape', function () {
      var nodeShape = get(this, 'cluster.okeEngineConfig.nodeShape');
      return nodeShape && nodeShapeMap[nodeShape];
    }),
    imageChoices: Object.entries(imageMap).map(function (e) {
      return {
        label: e[1],
        value: e[0]
      };
    }),
    selectedImage: computed('cluster.okeEngineConfig.nodeImage', function () {
      var nodeImage = get(this, 'cluster.okeEngineConfig.nodeImage');
      return nodeImage && imageMap[nodeImage];
    }),
    k8sVersionChoices: Object.entries(k8sVersionMap).map(function (e) {
      return {
        label: e[1],
        value: e[0]
      };
    }),
    k8sUpgradeVersionChoices: computed('cluster.okeEngineConfig.kubernetesVersion', function () {
      var _this = this;

      var supportedVersions = Object.assign({}, k8sVersionMap);
      var currentVersion = get(this, 'cluster.okeEngineConfig.kubernetesVersion');
      var cv = currentVersion.split('.').map(function (v) {
        return parseInt(v, 10);
      });
      var filtered = Object.keys(supportedVersions).filter(function (key) {
        return !_this.k8sUpgradableTo(currentVersion, key) == 1;
      }).forEach(function (key) {
        return delete supportedVersions[key];
      });
      return Object.entries(supportedVersions).map(function (e) {
        return {
          label: e[1],
          value: e[0]
        };
      });
    }),
    selectedk8sVersion: computed('cluster.okeEngineConfig.kubernetesVersion', function () {
      var k8sVersion = get(this, 'cluster.okeEngineConfig.kubernetesVersion');
      return k8sVersion && k8sVersionMap[k8sVersion];
    }),
    canAuthenticate: computed('cluster.okeEngineConfig.tenancyId', 'cluster.okeEngineConfig.compartmentId', 'cluster.okeEngineConfig.userOcid', 'cluster.okeEngineConfig.fingerprint', 'cluster.okeEngineConfig.privateKeyContents', function () {
      return get(this, 'cluster.okeEngineConfig.tenancyId') && get(this, 'cluster.okeEngineConfig.compartmentId') && get(this, 'cluster.okeEngineConfig.userOcid') && get(this, 'cluster.okeEngineConfig.fingerprint') && get(this, 'cluster.okeEngineConfig.privateKeyContents') ? false : true;
    }),
    canSaveVCN: computed('vcnCreationMode', 'cluster.okeEngineConfig.vcnName', 'cluster.okeEngineConfig.loadBalancerSubnetName1', 'cluster.okeEngineConfig.loadBalancerSubnetName2', 'cluster.okeEngineConfig.subnetAccess', 'cluster.okeEngineConfig.vcnCidr', function () {
      var mode = get(this, 'vcnCreationMode');

      if (mode === 'Quick') {
        return false;
      } else if (mode === 'Existing') {
        return get(this, 'cluster.okeEngineConfig.vcnName') && get(this, 'cluster.okeEngineConfig.loadBalancerSubnetName1') ? false : true;
      } else if (mode === 'Custom') {
        return get(this, 'cluster.okeEngineConfig.subnetAccess') && get(this, 'cluster.okeEngineConfig.vcnCidr') ? false : true;
      }

      return true;
    }),
    canCreateCluster: computed('cluster.okeEngineConfig.nodeShape', function () {
      return get(this, 'cluster.okeEngineConfig.nodeShape') ? false : true;
    }),
    loadLanguage: function loadLanguage(lang) {
      var _this2 = this;

      var translation = languages[lang] || languages['en-us'];
      var intl = get(this, 'intl');
      intl.addTranslations(lang, translation);
      intl.translationsFor(lang);
      set(this, 'refresh', false);
      next(function () {
        set(_this2, 'refresh', true);
        set(_this2, 'lanChanged', +new Date());
      });
    },
    validate: function validate() {
      this._super();

      var errors = get(this, 'errors') || [];

      if (!get(this, 'cluster.name')) {
        errors.push('Name is required');
      }

      var tenancyId = get(this, 'cluster.okeEngineConfig.tenancyId');

      if (!tenancyId.startsWith('ocid1.tenancy')) {
        errors.push('A valid tenancy OCID is required');
      }

      var compartmentId = get(this, 'cluster.okeEngineConfig.compartmentId');

      if (!compartmentId.startsWith('ocid1.compartment')) {
        errors.push('A valid compartment OCID is required');
      }

      var userOcid = get(this, 'cluster.okeEngineConfig.userOcid');

      if (!userOcid.startsWith('ocid1.user')) {
        errors.push('A valid user OCID is required');
      }

      if (get(errors, 'length')) {
        set(this, 'errors', errors);
        return false;
      } else {
        set(this, 'errors', null);
        return true;
      }
    },
    k8sUpgradableTo: function k8sUpgradableTo(currVer, toVer) {
      if (typeof currVer !== 'string') {
        return false;
      }

      if (typeof toVer !== 'string') {
        return false;
      }

      currVer = currVer.substr(1);
      toVer = toVer.substr(1);
      currVer = currVer.split('.');
      toVer = toVer.split('.');
      var len = Math.max(currVer.length, toVer.length);

      for (var i = 0; i < len; i++) {
        if ((toVer[i] || 0) > (currVer[i] || 0)) {
          return true;
        } else if ((toVer[i] || 0) < (currVer[i] || 0)) {
          return false;
        }
      }

      return true;
    }
  });
});
"use strict";

define("ui/components/cluster-driver/driver-oke/component", ["exports", "shared/components/cluster-driver/driver-oke/component"], function (exports, _component) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define.alias('shared/components/cluster-driver/driver-oke/component', 'global-admin/components/cluster-driver/driver-oke/component');
