# Ann's Interior Decors

A responsive promotional website for **Ann's Interior Decors – Ann's Embroidery Centre**, a home decor shop in Flyover (Wakimbo), along the Nairobi–Naivasha Highway, Kenya.

The site presents product collections, provides an enlarged product lightbox, and links enquiries directly to WhatsApp. It also includes business information, opening hours, location details, an embroidery course application form, and a Google Maps embed.

## Features

- Responsive desktop and mobile navigation
- Product category cards and quick-select dropdown
- Product galleries generated from `script.js`
- Image lightbox with previous and next controls
- Direct WhatsApp enquiry links
- Embroidery course application form
- Google Maps location embed
- Facebook and TikTok links
- SEO and social-sharing metadata

## Product Categories

- Curtains
- Curtain rods
- Pillows
- Carpets
- Duvets
- Bedsheets
- Sofa loose covers

## Project Structure

```text
.
|-- index.html
|-- styles.css
|-- script.js
|-- images/
|   `-- background.jpg
|-- curtains/
|-- rods/
|-- pillows/
|-- carpets/
|-- dovets/
|-- bedsheets/
`-- loosecovers/
```

## Running Locally

This is a static website and does not require a build step or package installation.

Open `index.html` directly in a browser, or serve the project with a local static server:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Configuration

Product names, descriptions, categories, and image paths are configured in `script.js`.

The WhatsApp number is defined as `WHATSAPP_NUMBER` in `script.js`. Update it in both `script.js` and the relevant links in `index.html` if it changes.

The course form submits through Web3Forms. Update the access key and form settings in `index.html` before changing that service configuration.

## Contact

- **WhatsApp:** 0728 066 999
- **Email:** [Annmaiga2012@gmail.com](mailto:Annmaiga2012@gmail.com)
- **Location:** Ann's Embroidery Centre, Flyover (Wakimbo), Nairobi–Naivasha Highway, Kenya

## Opening Hours

- Monday–Saturday: 8:00 AM–6:00 PM
- Sunday: 10:00 AM–4:00 PM
