---
title: "JavaFX 22 Highlights"
section: "highlights"
styleclass: "content"
---
# JavaFX 22 Highlights

JavaFX version 22 has been released. We've tailored down some of the most exciting parts of the release in this document.

Exciting features:
- New APIs:
  - Platform preferences API to fetch UI settings of the operating system. This allows developers to create themes that can integrate seamlessly with the color scheme of the operating system
  - Added support for additional css properties in ImageView: `-fx-preserve-ratio`, `-fx-smooth`, `-fx-fit-width`, `-fx-fit-height`

Improvements:
- Major performance improvements for css rendering in JavaFX
- JavaFX printing has got some improvements

The community came together to fix 76 bugs in the last 6 months. Following are major bug-fixes that went into JavaFX 22:

- Fix for correct paper size when using JavaFX print functionality
- Multiple fixes for correct application behavior in macOS 14 Sonoma
- `Node#lookupAll` now returns nodes according to selectors containing pseudo-selectors
- TextField pasted characters used to be make the cursor one character off the right most character. This issue is now fixed.

Finally, these are some dependency upgrades in JavaFX 20:
- Upgraded Glib to 2.78.1
- Upgraded GStreamer to 1.22.6
- Upgraded WebKit to 616.1
- Upgraded libxslt to 1.1.39


A more comprehensive list of all the changes in JavaFX 22 can be found on [Github](https://github.com/openjdk/jfx/blob/jfx22/doc-files/release-notes-22.md).

Kudos go to the fine people at [Gluon](https://gluonhq.com) who took care of the bulk of the work on JavaFX 22. Do check their [JavaFX Long Term Support](https://gluonhq.com/services/javafx-support/) services.
