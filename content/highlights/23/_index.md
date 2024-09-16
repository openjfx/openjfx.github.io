---
title: "JavaFX 23 Highlights"
section: "highlights"
styleclass: "content"
---
# JavaFX 23 Highlights

JavaFX version 23 has been released. We've tailored down some of the most exciting parts of the release in this document.

### JavaFX 23 Requires JDK 21 or later

JavaFX 23 is compiled with `--release 21` and thus requires JDK 21 or later in order to run.
If you attempt to run with an older JDK, the Java launcher will exit with an error message indicating that the `javafx.base` module cannot be read.

See [JDK-8321603](https://bugs.openjdk.org/browse/JDK-8321603) for more information.

### Clicking on the Scrollbar Track of Virtualized Controls Scrolls by Viewport Length

Clicking on the scrollbar track of virtualized controls, such as `ListView`, `TreeView`, `TableView`, and `TreeTableView`,
now scrolls by the viewport length rather than the length of the empty cell.
Furthermore, cells are no longer aligned to the top or bottom of the viewport after scrolling.

See [JDK-8323511](https://bugs.openjdk.org/browse/JDK-8323511) for more information.

### Keyboard Scrolling in Virtualized Controls

Keyboard scrolling key bindings, `alt-ctrl-arrows` (`option-command-arrows` on macOS),
have been added to virtualized controls such as  `ListView`, `TreeView`, `TableView`, and `TreeTableView` to improve accessibility.

See [JDK-8313138](https://bugs.openjdk.org/browse/JDK-8313138) for more information.

Exciting features:
- New APIs:
  - Labeled control now has `textTruncated` property which indicates when the text is visually truncated in order to fit the available width

- New Features:
  - CSS Transition support in JavaFX, making it easy to define animated transitions for creating rich and fluid user experiences
  - Support "@3x" and greater high-density image naming convention
  - Add support for EXT-X-MEDIA tag in HTTP Live Streaming

Improvements:
- JavaFX CSS has been receiving multiple performance improvements.
In JavaFX 22 highlights, we talked about performance improvements for css rendering.
JavaFX 23 has performance improvements for CSS selector matching

The community came together to fix 81 bugs in the last 6 months. Following are major bug-fixes that went into JavaFX 23:

- Fix for scrolling failure on a touch enabled display on Wayland
- Fix for ConcurrentModificationException in MediaPlayer which can lead to application crashes or unexpected behavior in media application
- Fix HLS video stream to render consistently
- Fix for `KeyEvent.getCode()` is `null` inside JFXPanel, affecting Swing/JavaFX integration

Finally, these are some dependency upgrades in JavaFX 23:
- Upgraded WebKit to 617.1
- Upgraded ICU4C to 74.2
- Upgraded SQLite to 3.45.3
- Upgraded libxml2 to 2.12.7


A more comprehensive list of all the changes in JavaFX 23 can be found on [Github](https://github.com/openjdk/jfx/blob/jfx23/doc-files/release-notes-23.md).

Kudos go to the fine people at [Gluon](https://gluonhq.com) who took care of the bulk of the work on JavaFX 23. Do check their [JavaFX Long Term Support](https://gluonhq.com/services/javafx-support/) services.
