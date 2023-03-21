---
title: "JavaFX 20 Highlights"
section: "highlights"
styleclass: "content"
---
# JavaFX 20 Highlights

JavaFX version 20 has been released. We've tailored down some of the most exciting parts of the release in this document.

### JavaFX 20 Requires JDK 17 or Later

JavaFX 20 is compiled with `--release 17` and thus requires JDK 17 or later in order to run. 
If you attempt to run with an older JDK, the Java launcher will exit with an error message indicating that the `javafx.base` module cannot be read.

Exciting features:
- New API: Skin class has a new method `install`. It allows the skin to safely make changes to its associated control,
like registering listeners, adding child nodes, and modifying properties and event handlers
- New API: ObservableValue class has a new method `when`, simplifying management of listeners
- New API: Additional constrained resize policies for Tree/TableView

Improvements:
- Memory leakage when changing skin fixed in Accordion, ButtonBar, ComboBox, MenuBar, MenuButton,
Pagination, ScrollBar, ScrollPane, SplitPane, TableView, TreeTableView
- Update JPEG Image Decoding Software to 9e
- Media support for libavcodec version 59
- Opacity is now working in JavaFX WebView

In the bug fix department, you’ll find, among others:

- Fix for JFXPanel popups opening at wrong coordinates when using multiple hidpi monitors
- Fix icon size in system menu on macOS with Retina display
- VirtualFlow no longer creates unneeded empty cells

Finally, these are some dependency upgrades in JavaFX 20:
- Upgraded MarlinFX to 0.9.4.6
- Upgraded WebKit to 614.1
- Upgraded ICU4C to 71.1
- Upgraded SQLite to 3.39.4

A more comprehensive list of all the changes in JavaFX 20 can be found on [Github](https://github.com/openjdk/jfx/blob/jfx20/doc-files/release-notes-20.md).

Kudos go to the fine people at [Gluon](https://gluonhq.com) who took care of the bulk of the work on JavaFX 20. Do check their [JavaFX Long Term Support](https://gluonhq.com/services/javafx-support/) services.
