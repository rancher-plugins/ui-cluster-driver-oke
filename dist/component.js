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

  var LAYOUT = 'PHNlY3Rpb24gY2xhc3M9Imhvcml6b250YWwtZm9ybSI+CgogIHt7I2FjY29yZGlvbi1saXN0IHNob3dFeHBhbmRBbGw9ZmFsc2UgYXMgfCBhbCBleHBhbmRGbiB8fX0KICB7eyNhY2NvcmRpb24tbGlzdC1pdGVtIHRpdGxlPWFjY2Vzc1RpdGxlCiAgICBkZXRhaWw9YWNjZXNzRGV0YWlsCiAgICBleHBhbmRBbGw9ZXhwYW5kQWxsCiAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikKICAgIGV4cGFuZE9uSW5pdD10cnVlCiAgfX0KCiAgPGRpdiBjbGFzcz0icm93Ij4KICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYgbWItMCI+CiAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcub2tlLnRlbmFuY3lPQ0lELmxhYmVsJ319e3tmaWVsZC1yZXF1aXJlZH19PC9sYWJlbD4KICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT0oZXEgbW9kZSAibmV3IikgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcudGVuYW5jeUlkfX0KICAgICAge3tpbnB1dCB0eXBlPSJ0ZXh0IiBuYW1lPSJ0ZW5hbmN5IiBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3Lm9rZS50ZW5hbmN5T0NJRC5wbGFjZWhvbGRlcicpIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLnRlbmFuY3lJZH19CiAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgPC9kaXY+CgoKICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYgbWItMCI+CiAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcub2tlLmNvbXBhcnRtZW50T0NJRC5sYWJlbCd9fXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KGVxIG1vZGUgIm5ldyIpIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLmNvbXBhcnRtZW50SWR9fQogICAgICB7e2lucHV0IHR5cGU9InRleHQiIG5hbWU9ImNvbXBhcnRtZW50IiBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3Lm9rZS5jb21wYXJ0bWVudE9DSUQucGxhY2Vob2xkZXInKSB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy5jb21wYXJ0bWVudElkfX0KICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICA8L2Rpdj4KCiAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5va2UucmVnaW9uLmxhYmVsJ319e3tmaWVsZC1yZXF1aXJlZH19PC9sYWJlbD4KICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT0oZXEgbW9kZSAibmV3IikgdmFsdWU9c2VsZWN0ZWRSZWdpb259fQogICAgICB7e3NlYXJjaGFibGUtc2VsZWN0IGNsYXNzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXJlZ2lvbkNob2ljZXMKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLnJlZ2lvbgogICAgICAgIH19CiAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgPC9kaXY+CgogIDwvZGl2PgoKICA8ZGl2IGNsYXNzPSJyb3ciPgoKICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdjbHVzdGVyTmV3Lm9rZS51c2VyT2NpZC5sYWJlbCd9fXt7ZmllbGQtcmVxdWlyZWR9fTwvbGFiZWw+CiAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KG9yIChlcSBtb2RlICJuZXciKSBlcSBtb2RlICJlZGl0aW5nIikgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcudXNlck9jaWR9fQogICAgICB7e2lucHV0IHR5cGU9InRleHQiIG5hbWU9InVzZXJuYW1lIiBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3Lm9rZS51c2VyT2NpZC5wbGFjZWhvbGRlcicpIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLnVzZXJPY2lkfX0KICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICA8L2Rpdj4KCiAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5va2UudXNlckZpbmdlcnByaW50LmxhYmVsJ319e3tmaWVsZC1yZXF1aXJlZH19PC9sYWJlbD4KICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT0ob3IgKGVxIG1vZGUgIm5ldyIpIGVxIG1vZGUgImVkaXRpbmciKSB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy5maW5nZXJwcmludH19CiAgICAgIHt7aW5wdXQgdHlwZT0idGV4dCIgbmFtZT0iZmluZ2VycHJpbnQiIGNsYXNzTmFtZXM9ImZvcm0tY29udHJvbCIgcGxhY2Vob2xkZXI9KHQgJ2NsdXN0ZXJOZXcub2tlLnVzZXJGaW5nZXJwcmludC5wbGFjZWhvbGRlcicpIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLmZpbmdlcnByaW50fX0KICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICA8L2Rpdj4KCiAgPC9kaXY+CiAgPGRpdiBjbGFzcz0icm93Ij4KCiAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi00Ij4KICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwgcHQtNSI+e3t0ICJjbHVzdGVyTmV3Lm9rZS5zZWNyZXRLZXkubGFiZWwifX17e2ZpZWxkLXJlcXVpcmVkfX08L2xhYmVsPgogICAgPC9kaXY+CiAgICB7e2lucHV0LXRleHQtZmlsZQogICAgICAgIGNsYXNzTmFtZXM9ImJveCIKICAgICAgICB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy5wcml2YXRlS2V5Q29udGVudHMKICAgICAgICBtdWx0aXBsZT1GYWxzZQogICAgICAgIGNhbkNoYW5nZU5hbWU9ZmFsc2UKICAgICAgICBhY2NlcHQ9InRleHQvcGxhaW4sLnBlbSwucGtleSwua2V5IgogICAgICAgIG1pbkhlaWdodD00MAogICAgICAgIHBsYWNlaG9sZGVyPSJjbHVzdGVyTmV3Lm9rZS5zZWNyZXRLZXkucGxhY2Vob2xkZXIiCiAgICAgICAgc2hvdWxkQ2hhbmdlTmFtZT1mYWxzZQogICAgICAgIGNvbmNlYWxWYWx1ZT10cnVlCiAgICAgIH19CgogIDwvZGl2PgogIHt7L2FjY29yZGlvbi1saXN0LWl0ZW19fQoKCiAge3sjaWYgKGFuZCByZWZyZXNoIChlcSBzdGVwIDEpKX19CiAge3tzYXZlLWNhbmNlbCBlZGl0aW5nPShlcSBtb2RlICdlZGl0JykKICAgICAgICBzYXZlPSJhdXRoZW50aWNhdGVPQ0kiCiAgICAgICAgY2FuY2VsPWNsb3NlCiAgICAgICAgc2F2ZURpc2FibGVkPWNhbkF1dGhlbnRpY2F0ZQogICAgICAgIGNyZWF0ZUxhYmVsPSJjbHVzdGVyTmV3Lm9rZS5hY2Nlc3MubmV4dCIKICAgICAgICBzYXZpbmdMYWJlbD0iY2x1c3Rlck5ldy5va2UuYWNjZXNzLmxvYWRpbmciCiAgICB9fQogIHt7L2lmfX0KCiAge3sjaWYgKGFuZCAoZ3RlIHN0ZXAgMikgKGVxIG1vZGUgJ2VkaXQnKSl9fQogIHt7I2FjY29yZGlvbi1saXN0LWl0ZW0gdGl0bGU9Y2x1c3RlclRpdGxlCiAgICAgICAgZGV0YWlsPWNsdXN0ZXJEZXRhaWwKICAgICAgICBzaG93RXhwYW5kPWZhbHNlCiAgICAgICAgZXhwYW5kT25Jbml0PXRydWUKICAgICAgICBleHBhbmRBbGw9YWwuZXhwYW5kQWxsCiAgICAgICAgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pCiAgICAgIH19CiAgPGRpdiBjbGFzcz0icm93Ij4KCiAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi00Ij4KICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5va2UudmVyc2lvbi5sYWJlbCd9fTwvbGFiZWw+CiAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KG9yIChlcSBtb2RlICJuZXciKSBlcSBtb2RlICJlZGl0aW5nIikgdmFsdWU9c2VsZWN0ZWRrOHNWZXJzaW9ufX0KICAgICAge3tuZXctc2VsZWN0IGNsYXNzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9azhzVXBncmFkZVZlcnNpb25DaG9pY2VzCiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLmt1YmVybmV0ZXNWZXJzaW9uCiAgICAgICAgICAgICAgfX0KICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICA8L2Rpdj4KCgogICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNCI+CiAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcub2tlLnF1YW50aXR5UGVyU3VibmV0LmxhYmVsJ319PC9sYWJlbD4KICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT0ob3IgKGVxIG1vZGUgIm5ldyIpIGVxIG1vZGUgImVkaXRpbmciKSB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy5xdWFudGl0eVBlclN1Ym5ldH19CiAgICAgIHt7aW5wdXQtaW50ZWdlciBtaW49MSBtYXg9bWF4Tm9kZUNvdW50IHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLnF1YW50aXR5UGVyU3VibmV0IGNsYXNzTmFtZXM9ImZvcm0tY29udHJvbCIgcGxhY2Vob2xkZXI9KHQgJ2NsdXN0ZXJOZXcub2tlLnF1YW50aXR5UGVyU3VibmV0LnBsYWNlaG9sZGVyJyl9fQogICAgICA8cCBjbGFzcz0iaGVscC1ibG9jayI+CiAgICAgICAge3t0ICdjbHVzdGVyTmV3Lm9rZS5xdWFudGl0eVBlclN1Ym5ldC5oZWxwJ319CiAgICAgIDwvcD4KICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICA8L2Rpdj4KCiAgPC9kaXY+CgogIHt7L2FjY29yZGlvbi1saXN0LWl0ZW19fQoKICB7eyEtLSBleGl0IHBvaW50IGZvciB1cGRhdGUvdXBncmFkZSAtLX19CiAge3sjaWYgcmVmcmVzaH19CiAge3tzYXZlLWNhbmNlbCBlZGl0aW5nPShlcSBtb2RlICdlZGl0JykKICAgICAgICAgICAgc2F2ZT0idXBncmFkZUNsdXN0ZXIiCiAgICAgICAgICAgIGNhbmNlbD1jbG9zZQogICAgICAgIH19CiAge3svaWZ9fQoKICB7e2Vsc2V9fQogIHt7I2lmIChndGUgc3RlcCAyKX19CiAge3sjYWNjb3JkaW9uLWxpc3QtaXRlbSB0aXRsZT1jbHVzdGVyVGl0bGUKICAgICAgICBkZXRhaWw9Y2x1c3RlckRldGFpbAogICAgICAgIHNob3dFeHBhbmQ9ZmFsc2UKICAgICAgICBleHBhbmRPbkluaXQ9dHJ1ZQogICAgICAgIGV4cGFuZEFsbD1hbC5leHBhbmRBbGwKICAgICAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikKICAgICAgfX0KCiAgPGRpdiBjbGFzcz0icm93Ij4KICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYgbWItMCI+CiAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcub2tlLnZlcnNpb24ubGFiZWwnfX08L2xhYmVsPgogICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShhbmQgKGVxIHN0ZXAgMikgaXNOZXcpIHZhbHVlPXNlbGVjdGVkazhzVmVyc2lvbn19CiAgICAgIHt7bmV3LXNlbGVjdCBjbGFzcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PWs4c1ZlcnNpb25DaG9pY2VzCiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLmt1YmVybmV0ZXNWZXJzaW9uCiAgICAgICAgICAgICAgfX0KICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICA8L2Rpdj4KCiAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02IG1iLTAiPgogICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCI+e3t0ICdjbHVzdGVyTmV3Lm9rZS5xdWFudGl0eVBlclN1Ym5ldC5sYWJlbCd9fTwvbGFiZWw+CiAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KGFuZCAoZXEgc3RlcCAyKSBpc05ldykgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcucXVhbnRpdHlQZXJTdWJuZXR9fQogICAgICB7e2lucHV0LWludGVnZXIgbWluPTEgbWF4PW1heE5vZGVDb3VudCB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy5xdWFudGl0eVBlclN1Ym5ldCBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3Lm9rZS5xdWFudGl0eVBlclN1Ym5ldC5wbGFjZWhvbGRlcicpfX0KICAgICAgPHAgY2xhc3M9ImhlbHAtYmxvY2siPgogICAgICAgIHt7dCAnY2x1c3Rlck5ldy5va2UucXVhbnRpdHlQZXJTdWJuZXQuaGVscCd9fQogICAgICA8L3A+CiAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgPC9kaXY+CgogIDwvZGl2PgogIHt7L2FjY29yZGlvbi1saXN0LWl0ZW19fQogIHt7I2lmIChhbmQgcmVmcmVzaCAoZXEgc3RlcCAyKSl9fQogIHt7c2F2ZS1jYW5jZWwgZWRpdGluZz0oZXEgbW9kZSAnZWRpdCcpCiAgICAgICAgICAgIHNhdmU9ImxvYWROb2RlQ29uZmlnIgogICAgICAgICAgICBjYW5jZWw9Y2xvc2UKICAgICAgICAgICAgY3JlYXRlTGFiZWw9ImNsdXN0ZXJOZXcub2tlLmNsdXN0ZXIubmV4dCIKICAgICAgICAgICAgc2F2aW5nTGFiZWw9ImNsdXN0ZXJOZXcub2tlLmNsdXN0ZXIubG9hZGluZyIKICAgICAgICB9fQogIHt7L2lmfX0KICB7ey9pZn19CiAge3sjaWYgKGd0ZSBzdGVwIDMpfX0KICB7eyNhY2NvcmRpb24tbGlzdC1pdGVtIHRpdGxlPXZpcnR1YWxDbG91ZE5ldHdvcmtUaXRsZQogICAgICAgICAgZGV0YWlsPXZpcnR1YWxDbG91ZE5ldHdvcmtEZXRhaWwKICAgICAgICAgIHNob3dFeHBhbmQ9ZmFsc2UKICAgICAgICAgIGV4cGFuZE9uSW5pdD10cnVlCiAgICAgICAgICBleHBhbmRBbGw9YWwuZXhwYW5kQWxsCiAgICAgICAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikKICAgICAgfX0KCgogIDxkaXYgY2xhc3M9InJvdyI+CgogICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkKICAgICAgICAgZWRpdGFibGU9KG5vdC1lcSBtb2RlICJ2aWV3IikKICAgICAgICAgdmFsdWU9KGlmIHZjbkNyZWF0aW9uTW9kZSAodCAiZ2VuZXJpYy5lbmFibGVkIikgKHQgImdlbmVyaWMuZGlzYWJsZWQiKSkKICAgICAgfX0KICAgICAgPGRpdiBjbGFzcz0icmFkaW8iPgogICAgICAgIDxsYWJlbD4KICAgICAgICAgIHt7cmFkaW8tYnV0dG9uCiAgICAgICAgICAgICAgc2VsZWN0aW9uPXZjbkNyZWF0aW9uTW9kZQogICAgICAgICAgICAgIHZhbHVlPSJRdWljayIKICAgICAgICAgICAgICBkaXNhYmxlZD0oaWYgbXVsdGlwbGVSZWdpc3RyaWVzIHRydWUgZmFsc2UpCiAgICAgICAgICAgIH19CiAgICAgICAgICB7e3QgJ2NsdXN0ZXJOZXcub2tlLnN1Ym5ldEFjY2Vzc09wdGlvbnMucXVpY2snfX0KICAgICAgICA8L2xhYmVsPgogICAgICA8L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0icmFkaW8iPgogICAgICAgIDxsYWJlbD4KICAgICAgICAgIHt7cmFkaW8tYnV0dG9uCiAgICAgICAgICAgICAgc2VsZWN0aW9uPXZjbkNyZWF0aW9uTW9kZQogICAgICAgICAgICAgIHZhbHVlPSJFeGlzdGluZyIKICAgICAgICAgICAgICBkaXNhYmxlZD0oaWYgbXVsdGlwbGVSZWdpc3RyaWVzIHRydWUgZmFsc2UpCiAgICAgICAgICAgIH19CiAgICAgICAgICB7e3QgJ2NsdXN0ZXJOZXcub2tlLnN1Ym5ldEFjY2Vzc09wdGlvbnMuZXhpc3RpbmcnfX0KICAgICAgICA8L2xhYmVsPgogICAgICA8L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0icmFkaW8iPgogICAgICAgIDxsYWJlbD4KICAgICAgICAgIHt7cmFkaW8tYnV0dG9uCiAgICAgICAgICAgICAgc2VsZWN0aW9uPXZjbkNyZWF0aW9uTW9kZQogICAgICAgICAgICAgIHZhbHVlPSJDdXN0b20iCiAgICAgICAgICAgICAgZGlzYWJsZWQ9KGlmIG11bHRpcGxlUmVnaXN0cmllcyB0cnVlIGZhbHNlKQogICAgICAgICAgICB9fQogICAgICAgICAge3t0ICdjbHVzdGVyTmV3Lm9rZS5zdWJuZXRBY2Nlc3NPcHRpb25zLmN1c3RvbSd9fQogICAgICAgIDwvbGFiZWw+CiAgICAgIDwvZGl2PgoKICAgICAge3sjaWYgKGVxIHZjbkNyZWF0aW9uTW9kZSAiQ3VzdG9tIil9fQogICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5va2Uuc3VibmV0LmxhYmVsJ319e3tmaWVsZC1yZXF1aXJlZH19PC9sYWJlbD4KICAgICAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KGFuZCAoZXEgc3RlcCAzKSBpc05ldykgdmFsdWU9c2VsZWN0ZWRTdWJuZXR9fQogICAgICAgICAge3tzZWFyY2hhYmxlLXNlbGVjdCBjbGFzcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgICAgY29udGVudD1zdWJuZXRBY2Nlc3NDaG9pY2VzCiAgICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy5zdWJuZXRBY2Nlc3MKICAgICAgICAgICAgICB9fQogICAgICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICAgICAgPC9kaXY+CgogICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5va2UuY2lkci5sYWJlbCd9fTwvbGFiZWw+CiAgICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShhbmQgKGVxIHN0ZXAgMykgaXNOZXcpIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLnZjbkNpZHJ9fQogICAgICAgICAge3tpbnB1dCB0eXBlPSJ0ZXh0IiBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3Lm9rZS5jaWRyLnBsYWNlaG9sZGVyJykgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcudmNuQ2lkcn19CiAgICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgICA8L2Rpdj4KICAgICAgPC9kaXY+CiAgICAgIHt7L2lmfX0KCiAgICAgIHt7I2lmIChlcSB2Y25DcmVhdGlvbk1vZGUgIkV4aXN0aW5nIil9fQogICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5va2UuZXhpc3RpbmdWQ05EZXRhaWxzLmNvbXBhcnRtZW50T0NJRCd9fTwvbGFiZWw+CiAgICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShhbmQgKGVxIHN0ZXAgMykgaXNOZXcpIHZhbHVlPWNsdXN0ZXIub2tlRW5naW5lQ29uZmlnLnZjbkNvbXBhcnRtZW50SWR9fQogICAgICAgICAge3tpbnB1dCB0eXBlPSJ0ZXh0IiBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3Lm9rZS5leGlzdGluZ1ZDTkRldGFpbHMuY29tcGFydG1lbnRPQ0lEUGxhY2Vob2xkZXInKSB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy52Y25Db21wYXJ0bWVudElkfX0KICAgICAgICAgIDxwIGNsYXNzPSJoZWxwLWJsb2NrIj57e3QgImNsdXN0ZXJOZXcub2tlLmV4aXN0aW5nVkNORGV0YWlscy5jb21wYXJ0bWVudE9DSURIZWxwIiB9fTwvcD4KICAgICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICAgIDwvZGl2PgoKICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcub2tlLmV4aXN0aW5nVkNORGV0YWlscy52Y25OYW1lJ319e3tmaWVsZC1yZXF1aXJlZH19PC9sYWJlbD4KICAgICAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KGFuZCAoZXEgc3RlcCAzKSBpc05ldykgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcudmNuTmFtZX19CiAgICAgICAgICB7e2lucHV0IHR5cGU9InRleHQiIGNsYXNzTmFtZXM9ImZvcm0tY29udHJvbCIgcGxhY2Vob2xkZXI9KHQgJ2NsdXN0ZXJOZXcub2tlLmV4aXN0aW5nVkNORGV0YWlscy52Y25OYW1lUGxhY2Vob2xkZXInKSB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy52Y25OYW1lfX0KICAgICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0icm93Ij4KICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi02Ij4KICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj57e3QgJ2NsdXN0ZXJOZXcub2tlLmV4aXN0aW5nVkNORGV0YWlscy5sYlN1Ym5ldE5hbWUxJ319e3tmaWVsZC1yZXF1aXJlZH19PC9sYWJlbD4KICAgICAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9KGFuZCAoZXEgc3RlcCAzKSBpc05ldykgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcubG9hZEJhbGFuY2VyU3VibmV0TmFtZTF9fQogICAgICAgICAge3tpbnB1dCB0eXBlPSJ0ZXh0IiBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSh0ICdjbHVzdGVyTmV3Lm9rZS5leGlzdGluZ1ZDTkRldGFpbHMubGJTdWJuZXROYW1lMVBsYWNlaG9sZGVyJykgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcubG9hZEJhbGFuY2VyU3VibmV0TmFtZTF9fQogICAgICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICAgICAgPC9kaXY+CgogICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5va2UuZXhpc3RpbmdWQ05EZXRhaWxzLmxiU3VibmV0TmFtZTInfX17e2ZpZWxkLXJlcXVpcmVkfX08L2xhYmVsPgogICAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT0oYW5kIChlcSBzdGVwIDMpIGlzTmV3KSB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy5sb2FkQmFsYW5jZXJTdWJuZXROYW1lMn19CiAgICAgICAgICB7e2lucHV0IHR5cGU9InRleHQiIGNsYXNzTmFtZXM9ImZvcm0tY29udHJvbCIgcGxhY2Vob2xkZXI9KHQgJ2NsdXN0ZXJOZXcub2tlLmV4aXN0aW5nVkNORGV0YWlscy5sYlN1Ym5ldE5hbWUyUGxhY2Vob2xkZXInKSB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy5sb2FkQmFsYW5jZXJTdWJuZXROYW1lMn19CiAgICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgICA8L2Rpdj4KCiAgICAgIDwvZGl2PgogICAgICB7ey9pZn19CiAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgPC9kaXY+CgogIDwvZGl2PgoKICB7ey9hY2NvcmRpb24tbGlzdC1pdGVtfX0KICB7eyNpZiAoYW5kIHJlZnJlc2ggKGVxIHN0ZXAgMykpfX0KICB7e3NhdmUtY2FuY2VsIGVkaXRpbmc9KGVxIG1vZGUgJ2VkaXQnKQogICAgICAgICAgICBzYXZlPSJsb2FkSW5zdGFuY2VDb25maWciCiAgICAgICAgICAgIGNhbmNlbD1jbG9zZQogICAgICAgICAgICBzYXZlRGlzYWJsZWQ9Y2FuU2F2ZVZDTgogICAgICAgICAgICBjcmVhdGVMYWJlbD0iY2x1c3Rlck5ldy5va2Uubm9kZS5uZXh0IgogICAgICAgICAgICBzYXZpbmdMYWJlbD0iY2x1c3Rlck5ldy5va2Uubm9kZS5sb2FkaW5nIgogICAgICAgIH19CiAge3svaWZ9fQogIHt7L2lmfX0KICB7eyNpZiAoZ3RlIHN0ZXAgNCl9fQogIHt7I2FjY29yZGlvbi1saXN0LWl0ZW0gdGl0bGU9aW5zdGFuY2VUaXRsZQogICAgICAgICAgZGV0YWlsPWluc3RhbmNlRGV0YWlsCiAgICAgICAgICBzaG93RXhwYW5kPWZhbHNlCiAgICAgICAgICBleHBhbmRPbkluaXQ9dHJ1ZQogICAgICAgICAgZXhwYW5kQWxsPWFsLmV4cGFuZEFsbAogICAgICAgICAgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pCiAgICAgIH19CiAgPGRpdiBjbGFzcz0icm93Ij4KCgogICAgPGRpdiBjbGFzcz0icm93Ij4KICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5va2Uubm9kZVNoYXBlLmxhYmVsJ319e3tmaWVsZC1yZXF1aXJlZH19PC9sYWJlbD4KICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5IGVkaXRhYmxlPShhbmQgKGVxIHN0ZXAgNCkgaXNOZXcpIHZhbHVlPXNlbGVjdGVkbm9kZVNoYXBlfX0KICAgICAgICB7e3NlYXJjaGFibGUtc2VsZWN0IGNsYXNzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9bm9kZVNoYXBlQ2hvaWNlcwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy5ub2RlU2hhcGUKICAgICAgICAgICAgICAgIH19CiAgICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICAgIDwvZGl2PgoKICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7dCAnY2x1c3Rlck5ldy5va2Uub3MubGFiZWwnfX08L2xhYmVsPgogICAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9aXNOZXcgdmFsdWU9c2VsZWN0ZWRJbWFnZX19CiAgICAgICAge3tzZWFyY2hhYmxlLXNlbGVjdCBjbGFzcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PWltYWdlQ2hvaWNlcwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLm9rZUVuZ2luZUNvbmZpZy5ub2RlSW1hZ2UKICAgICAgICAgICAgICAgIH19CiAgICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICAgIDwvZGl2PgoKICAgIDwvZGl2PgoKICAgIDxkaXYgY2xhc3M9InJvdyI+CgogICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi00Ij4KICAgICAgICA8bGFiZWwgY2xhc3M9ImFjYy1sYWJlbCBwdC01Ij57e3QgImNsdXN0ZXJOZXcub2tlLm5vZGVTU0hLZXkubGFiZWwifX08L2xhYmVsPgogICAgICA8L2Rpdj4KICAgICAge3tpbnB1dC10ZXh0LWZpbGUKICAgICAgICBjbGFzc05hbWVzPSJib3giCiAgICAgICAgdmFsdWU9Y2x1c3Rlci5va2VFbmdpbmVDb25maWcubm9kZVB1YmxpY0tleUNvbnRlbnRzCiAgICAgICAgbXVsdGlwbGU9RmFsc2UKICAgICAgICBjYW5DaGFuZ2VOYW1lPWZhbHNlCiAgICAgICAgYWNjZXB0PSJ0ZXh0L3BsYWluLC5wZW0sLnB1Yiwua2V5IgogICAgICAgIG1pbkhlaWdodD00MAogICAgICAgIHBsYWNlaG9sZGVyPSJjbHVzdGVyTmV3Lm9rZS5ub2RlU1NIS2V5LnBsYWNlaG9sZGVyIgogICAgICAgIHNob3VsZENoYW5nZU5hbWU9ZmFsc2UKICAgICAgICBjb25jZWFsVmFsdWU9ZmFsc2UKICAgICAgfX0KCiAgICA8L2Rpdj4KCgoKICA8L2Rpdj4KCiAge3svYWNjb3JkaW9uLWxpc3QtaXRlbX19CiAge3sjaWYgKGFuZCByZWZyZXNoIChlcSBzdGVwIDQpKX19CiAge3tzYXZlLWNhbmNlbCBlZGl0aW5nPShlcSBtb2RlICdlZGl0JykKICAgICAgICAgIHNhdmVEaXNhYmxlZD1jYW5DcmVhdGVDbHVzdGVyCiAgICAgICAgICBzYXZlPSJzYXZlIgogICAgICAgICAgY2FuY2VsPWNsb3NlCiAgICAgIH19CiAge3svaWZ9fQogIHt7L2lmfX0KICB7ey9pZn19CgoKICB7e3RvcC1lcnJvcnMgZXJyb3JzPWVycm9yc319CiAge3t0b3AtZXJyb3JzIGVycm9ycz1vdGhlckVycm9yc319CiAge3t0b3AtZXJyb3JzIGVycm9ycz1jbHVzdGVyRXJyb3JzfX0KICB7ey9hY2NvcmRpb24tbGlzdH19Cjwvc2VjdGlvbj4=';
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
    'v1.13.5': 'v1.13.5',
    'v1.12.7': 'v1.12.7',
    'v1.11.9': 'v1.11.9'
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
            'lbSubnetName2': 'Name of second pre-existing LB subnet',
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
          kubernetesVersion: 'v1.13.5',
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
        return get(this, 'cluster.okeEngineConfig.vcnName') && get(this, 'cluster.okeEngineConfig.loadBalancerSubnetName1') && get(this, 'cluster.okeEngineConfig.loadBalancerSubnetName2') ? false : true;
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
      intl.addTranslation(lang, 'clusterNew.oke', translation.clusterNew.oke);
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
