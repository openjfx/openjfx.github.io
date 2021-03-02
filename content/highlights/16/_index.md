---
title: "JavaFX 16 Highlights"
section: "highlights"
styleclass: "content"
---
# JavaFX 16 Highlights

JavaFX version 16 has been released. We've tailored down some of the most exciting parts of the release in this document.

Exciting features:
- JavaFX will now warn if any javafx.* modules are loaded from the classpath
- Attenuation has been added for PointLight in JavaFX 3D
- Allow JavaFX native libs to be build for Apple Silicon

Improvements:
- Performance improvement for all controls using VirtualFlow
- ImagePattern has been improved to apply SVG pattern transforms

Removal and Clean up:
- Obsolete Pisces rasterizer has been removed

In the bug fix department, you’ll find, among others:
- Undecorated stage were not being able to be maximized on Linux and MacOS. It is now fixed on both the places.
- Nested calls to snap methods in Region now gives consistent results
- At certain DPI scaling levels, control labels used to truncate. This has been fixed
- System menu bar now works on macOS Catalina
- Fix misbehavior on switching skin for:
  - ChoiceBox
  - Labeled
  - ListCell
  - TabPane
  - TreeCell
  - TreeView
- On Android platform, the keyboard now displays correctly when tapped on a TextInput control


Finally, these are some dependency upgrades in JavaFX 16:

[comment]: <> (TODO)

A more comprehensive list of all the changes in JavaFX 16 can be found on [Github](https://github.com/openjdk/jfx/blob/master/doc-files/release-notes-16.md).

Kudos go to the fine people at [Gluon](https://gluonhq.com) who took care of the bulk of the work on JavaFX 16. Do check their [JavaFX Long Term Support](https://gluonhq.com/services/javafx-support/) services.