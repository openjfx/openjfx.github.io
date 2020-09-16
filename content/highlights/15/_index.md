---
title: "JavaFX 15 Highlights"
section: "highlights"
styleclass: "content"
---
# JavaFX 15 Highlights

A couple of weeks ago, JavaFX version 15 was released. We've tailored down some of the most exciting parts of the release in this document.

Exciting features:
- JavaFX now has 3D support for the newer Intel graphics drivers on Linux
- Support for e-paper displays on i.MX6 devices was added
- FX scripting support was enhanced

Improvements:
- Better native keyboard handling and integration on iOS and Android
- Adjusted font size in JavaFX apps with enabled Monocle on Raspberry Pi
- Capped the refresh rate on iOS (to a maximum of 30 Hz)

Removal and Clean up:
- The JavaBeanXxxPropertyBuilders constructors were removed
- The deprecated finalize() methods from JavaFX property objects were removed
- Some unnecessary logging, e.g. for pinch gestures on iOS, is now skipped

In the bug fix department, you’ll find, among others:
- A fix for the SVG patterns that were drawn incorrectly
- A solution for some inconsistencies with controls, such as:
  - The incorrect arrow key traversal through tabs after reordering the tabs in a TabPane
  - The lost formatting when using Ctrl-A in HTMLEditor
  - The wrong Scrollbar position on touch supported devices
- A fix for memory leaks, e.g. in the ProgressIndicator class, in the ToggleButton.setToggleGroup() method, and in some other places
- Better code hygiene to avoid exceptions such as:
  - An IndexOutOfBoundsException when requesting focus on an empty bar
  - A StringOutOfBoundsException when adding a ChangeListener to TextField.selectedTextProperty()
  - Possible NullPointerExceptions in TabPaneSkin.performDrag(), in the MenuButtonSkinBase change listener, and while entering empty submenu with "arrow right"

Finally, these are some dependency upgrades in JavaFX 15:
  - Upgraded libFFI to version 3.3
  - Upgraded SQLite to version 3.32.3
  - Upgraded WebKit to version 609.1
  - Upgraded libxml2 to version 2.9.10

A more comprehensive list of all the changes in JavaFX 15 can be found on [Github](https://github.com/openjdk/jfx/blob/master/doc-files/release-notes-15.md).

Kudos go to the fine people at [Gluon](https://gluonhq.com) who took care of the bulk of the work on JavaFX 15. Do check their [JavaFX Long Term Support](https://gluonhq.com/services/javafx-support/) services.