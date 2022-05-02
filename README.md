# Receipt printer
A simple api to connect a receipt printer to the web.

![Demonstration of using the API to print a short message](https://user-images.githubusercontent.com/18134219/166328383-10b13115-b04a-4ca1-ba1f-1b6fb0c0d7cc.gif)


Works on my Mac with [this USB POS Printer with 58mm Thermal Paper Rolls](https://www.amazon.com/Printer-58mm-Thermal-Paper-Rolls/dp/B005IKHL4U).

## Setting up
1. Set the printer as your default printer in System Preferences.

2. Clone the repo `git clone https://github.com/e-zim/receipt-printer`.

3. `cd receipt-printer` then install dependencies with `yarn`.

4. `yarn dev` and `yarn http`. You will need to install [ngrok](https://ngrok.com/).

5. Send a POST request with a `{"msg": message}` in the the body to the URL
from ngrok.
