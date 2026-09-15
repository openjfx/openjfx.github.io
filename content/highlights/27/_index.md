---
title: "JavaFX 27 Highlights"
section: "highlights"
styleclass: "content"
---
# JavaFX 27 Highlights

JavaFX version 27 has been released. We've tailored down some of the most exciting parts of the release in this document.

## Important Changes

### JavaFX 27 Requires JDK 25 or Later

JavaFX 27 is compiled with `--release 25` and thus requires JDK 25 or later in order to run.
If you attempt to run with an older JDK, the Java launcher will exit with an error message indicating that the `javafx.base` module cannot be read.

See [JDK-8376601](https://bugs.openjdk.org/browse/JDK-8376601) for more information.

### Metal Is the Default Rendering Pipeline on macOS

Metal is now the default JavaFX rendering pipeline on macOS, replacing the OpenGL-based ES2 pipeline.
Applications can benefit from a modern, faster, and lower-power graphics API.
If needed, applications can still use the ES2 pipeline by setting the `-Dprism.order=es2` system property.

See [JDK-8373091](https://bugs.openjdk.org/browse/JDK-8373091) for more information.

Exciting features:
- New APIs:
  - RichTextArea tab stop attributes
  - RichTextArea embedded image, text background, and wavy underline attributes
  - Conditional stylesheet imports
  - ConditionalFeature media queries
  - Platform media query
  - JavaFX controls in the title bar

- New Features:
  - Metal is now the default JavaFX rendering pipeline on macOS
  - Animations now respect the reduced motion preference
  - RichTextArea includes new text APIs and accessibility improvements
  - Improved accessibility support on macOS, including navigable static text and hyperlinks
  - Better Flatpak integration through GtkFileChooserNative
  - iOS support improvements, including UIWindowScene support

The community came together to fix more than 60 bugs in this release. Following are some notable bug fixes that went into this release:

- Fixes for multiple FilteredList and ListChangeBuilder index handling issues
- Fixes for slow selection and sorting in TableView, TreeView, TreeTableView, ChoiceBox, and ListView
- Fix for ComboBox popup positioning, string converter updates, null handling, and cell graphics
- Fix for prompt text visibility in empty focused text input controls
- Fixes for RichTextArea export and attribute handling
- Fixes for Metal rendering and render scale issues
- Fix for FlowPane layout wrapping of TextFlow nodes with max-width styling
- Fixes for macOS menu bar, trackpad scrolling, and system menu behavior
- Fixes for iOS Glass toolkit crashes and threading issues
- Fix for animated GIFs not animating after the WebKit update

Finally, these are some dependency upgrades in this release:
- Update WebKit to 623.1
- Update GStreamer to 1.28.3
- Update libxml2 to 2.15.3
- Update libxslt to 1.1.45
- Update JPEG Image Decoding Software to 10
- Provide media support for libavcodec version 62

Security fixes:
- Improve graphics playback
- Improve audio conversion
- Better handling of MP4 files
- Enhance playlist loading
- Improve editor selection
- Enhance WebView resource loading

A more comprehensive list of all the changes for this release can be found on [Github](https://github.com/openjdk/jfx/blob/jfx27/doc-files/release-notes-27.md).

Kudos go to the fine people at [Gluon](https://gluonhq.com) who took care of the bulk of the work on JavaFX 27. Do check their [JavaFX Long Term Support](https://gluonhq.com/services/javafx-support/) services.
