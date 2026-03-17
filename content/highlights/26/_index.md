---
title: "JavaFX 26 Highlights"
section: "highlights"
styleclass: "content"
---
# JavaFX 26 Highlights

JavaFX version 26 has been released. We've tailored down some of the most exciting parts of the release in this document.

## Important Changes

### JavaFX 26 Requires JDK 24 or Later

JavaFX 26 is compiled with `--release 24` and thus requires JDK 24 or later in order to run. 
If you attempt to run with an older JDK, the Java launcher will exit with an error message indicating that the `javafx.base` module cannot be read.

See [JDK-8365402](https://bugs.openjdk.org/browse/JDK-8365402) for more information.

### Owned Windows No Longer Move When Owner Moves on macOS

On macOS, an owned (child) window used to move along with its owner, whenever the owner window was moved.
This behavior caused the owned window to disappear when moved to a secondary screen.
The former behavior of owned windows was also inconsistent with the behavior on Linux and Windows platforms.
This fix makes the behavior of owned windows consistent across platforms.

See [JDK-8252373](https://bugs.openjdk.org/browse/JDK-8252373) for more information.

### Headless Platform Prototype: Streamlining CI/CD

A highly anticipated addition in JavaFX 26 is the Headless platform prototype.
For years, running JavaFX applications in environments without a display—such as Docker containers or cloud-based CI/CD runners—required complex workarounds like Xvfb.
This new native headless glass platform allows JavaFX to run without a graphical environment.

This is a game-changer for automated testing.
You can now execute UI tests, perform server-side node snapshotting, or run data-heavy scene graph calculations on headless servers with significantly less overhead.
To experiment with this feature, simply launch your application with the flag `-Dglass.platform=headless`.

See [JDK-8364687](https://bugs.openjdk.org/browse/JDK-8364687) for more information.

### Modern Graphics: macOS Metal Pipeline

A major milestone in this release is the implementation of the macOS Metal Rendering Pipeline. 
This transition away from OpenGL ensures better graphics performance and compatibility with modern Apple hardware and future versions of macOS.

See [JDK-8271024](https://bugs.openjdk.org/browse/JDK-8271024) for more information.

## Removed Features and Options

### The FXPermission Class Has Been Removed

The FXPermission class was terminally deprecated in JavaFX 24 and has now been removed. Following the removal of support for the Java Security Manager from JavaFX, all uses of the FXPermission class were removed. As such, the class serves no purpose anymore and has been removed from JavaFX.

See [JDK-8359759](https://bugs.openjdk.org/browse/JDK-8359759) for more information.

Exciting features:
- New APIs:
  - ObservableList API improvement: New ObservableList.replaceRange(...) method for efficient bulk replacements in lists
  - HeaderBar API updates for better customization of application title bars
  - Dialogs now support StageStyle.EXTENDED (Preview) enabling dialogs to integrate with extended window decorations

- New Features:
  - Piecewise linear easing function added for animation interpolation 
  - RichTextArea improvements including `insertStyles` property and multiple enhancements to rich text editing capabilities
  - RichParagraph enhancements for better paragraph-level formatting support
  - New graphics capabilities
    - Viewport media feature queries 
    - Background image loading from InputStream 
    - New MOUSE_DRAG_DONE event type

The community came together to fix more than 80 bugs in this release. Following are some notable bug fixes that went into this release:

- Fix for ComboBox prompt text not displaying after value reset
- Fix for TreeTableView not updating when moving TreeItems
- Fix for memory leak in XYChart when removing data
- Fix for RichTextArea cursor and style handling issues
- Fix for GridPane rendering extra gaps when rows or columns are unmanaged
- Fix for layout updates failing when using Parent#setNeedsLayout(true)
- Fix for multiple Swing integration NullPointerExceptions in JFXPanel and SwingNode
- Fix for Metal rendering pipeline crashes in virtualized environments

Finally, these are some dependency upgrades in this release:
- Update WebKit to 622.1
- Update SQLite to 3.50.4
- Update libxml2 to 2.14.6
- Update ICU4C to 77.1
- Update GStreamer to 1.26.5
- Update Glib to 2.84.3
- Update libFFI to 3.5.2

Security fixes:
- Improve handling of URIs in application lifecycle
- Update libxslt support
- Improve glyph handling in WebKit

A more comprehensive list of all the changes for this release can be found on [Github](https://github.com/openjdk/jfx/blob/jfx26/doc-files/release-notes-26.md).

Kudos go to the fine people at [Gluon](https://gluonhq.com) who took care of the bulk of the work on JavaFX 26. Do check their [JavaFX Long Term Support](https://gluonhq.com/services/javafx-support/) services.
