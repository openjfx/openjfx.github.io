---
title: "JavaFX 19 Highlights"
section: "highlights"
styleclass: "content"
---
# JavaFX 19 Highlights

JavaFX version 19 has been released. We've tailored down some of the most exciting parts of the release in this document.

New features:
- In JavaFX 18, Media support for H.265/HEVC codec was added. In JavaFX 19, the coded support has been extended toHTTP Live Streaming
- New API: Map, FlatMap and OrElse fluent bindings for ObservableValue
- Two new CSS pseudo-classes for Node :focus-visible and :focus-within

Improvements:
- Faster observable ArrayList creation in FXCollections
- Available list of printers can now be updated without a need to restart the application

In the bug fix department, you’ll find, among others:

- Modal behavior fixes for Stage on Linux platform
- ES2Pipeline detection for AMD vega20 graphics card
- Fixes related to touch screen:
  - ScrollPane edge bounce on Raspberry Pi with Touchscreen
  - Mouse or touch presses on a non-focusable region don't clear the focusVisible flag of the current focus owner
  - With Touch enabled devices scrollbar disappears and the table is scrolled to the beginning
  - Touch events related leaks in ScrollPaneSkin

Finally, these are some dependency upgrades in JavaFX 19:
- Upgraded libFFI to version 3.4.2
- Upgraded GStreamer to version 1.20.1
- Upgraded Glib to version 2.72.0
- Upgraded WebKit to version 613.1
- Upgraded SQLite to version 3.37.2
- Upgraded libxml2 to version 2.9.14
- Upgraded libxslt to version 1.1.35


A more comprehensive list of all the changes in JavaFX 19 can be found on [Github](https://github.com/openjdk/jfx/blob/jfx19/doc-files/release-notes-19.md).

Kudos go to the fine people at [Gluon](https://gluonhq.com) who took care of the bulk of the work on JavaFX 19. Do check their [JavaFX Long Term Support](https://gluonhq.com/services/javafx-support/) services.