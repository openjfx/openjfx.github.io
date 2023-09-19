---
title: "JavaFX 21 Highlights"
section: "highlights"
styleclass: "content"
---
# JavaFX 21 Highlights

JavaFX version 21 has been released. We've tailored down some of the most exciting parts of the release in this document.

### JavaFX 21 requires macOS 11 or later

On Mac platforms, JavaFX 21 requires macOS 11 or later.
An exception will be thrown when initializing the JavaFX runtime on older versions of macOS.

### JavaFX 21 requires GTK 3 on Linux

On Linux platforms, JavaFX 21 requires GTK3 version 3.8 or later.
An exception will be thrown when initializing the JavaFX runtime if the GTK 3 library cannot be loaded.

Exciting features:
- New APIs:
  - Add and remove listeners with ease using the new `Subscription` API
  - Event handler methods `addEvent*` and `removeEvent*` have been added to `EventTarget` interface
  - GridPane has a new constructor: `GridPane(double hgap, double vgap)`
  - Platform class has a new method `canStartNestedEventLoop` which can used to check whether it is safe to start a nested event loop
  - TextFlow has a new method `underlineShape(int, int)` to enable spellchecker decoration (squiggly line) under text region
  - TableHeaderRow has a new protected method `showColumnMenu(mouseEvent)`, allowing developers to customize the behaviour when the table menu button is clicked
- All new APIs since JavaFX 9 can now be easily accessed from the [javadoc](https://openjfx.io/javadoc/21/new-list.html) under the `New` section.

Improvements:
- Performance improvement in VirtualFlow
- Table column's PopupMenu is now created lazily. This improves performance, especially for tables with many columns
- ObservableListBase constructs ListChangeBuilder lazily improving performance of application using `ObservableList`

The community came together to fix 63 bugs in the last 6 months. Following are major bug-fixes that went into JavaFX 21:

- `Match.getPseudoClasses` used to return an instance `PseudoClassState`, which is a private class
- Fix `NPE` for drag and drop events
- Spinner's converter now correctly update its editor
- JavaFX now supports fonts installed per-user on Windows 10/11
- Memory leak fix in JPEG image loader

Finally, these are some dependency upgrades in JavaFX 20:
- Upgraded libFFI to 3.4.4
- Upgraded WebKit to 615.1
- Upgraded libxml2 to 2.10.4
- Upgraded ICU4C to 73.1


A more comprehensive list of all the changes in JavaFX 21 can be found on [Github](https://github.com/openjdk/jfx/blob/jfx21/doc-files/release-notes-21.md).

Kudos go to the fine people at [Gluon](https://gluonhq.com) who took care of the bulk of the work on JavaFX 21. Do check their [JavaFX Long Term Support](https://gluonhq.com/services/javafx-support/) services.
