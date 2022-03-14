---
title: "JavaFX 18 Highlights"
section: "highlights"
styleclass: "content"
---
# JavaFX 18 Highlights

JavaFX version 18 has been released. We've tailored down some of the most exciting parts of the release in this document.

New features:
- JavaFX Media now has support for H.265/HEVC
- Node's managed property can now be styled using CSS
- Convenience factory methods for Border and Background

Improvements:
- JavaFX modules include version information
- JavaFX Webview supports transparent backgrounds
- Improvement in selection performance for TableView

Removal and Clean up:
- JavaFX GTK 2 library has been deprecated for removal

The community came together to fix 74 bugs in the last 6 months with nearly half of them going into the 'controls'.
Following are major bug-fixes that went into 18:

- Skin and behavior fixes in multiple controls:
  - Misbehavior on switching skin has been fixed for TextField, TableView and TreeTableView
  - NPE on calling startEdit on TextFieldXXCell, TableCell and TreeTableCell
  - Better support for disposing skin elements across controls

- MediaPlayer had the following fixes:
  - No speakers connected to the PC while playing an mp4 video results in no display
  - Video stops, but audio continues to play when stopTime is reached on MacOS

A more comprehensive list of all the changes in JavaFX 18 can be found on [Github](https://github.com/openjdk/jfx/blob/jfx18/doc-files/release-notes-18.md).

Kudos go to the fine people at [Gluon](https://gluonhq.com) who took care of the bulk of the work on JavaFX 18. Do check their [JavaFX Long Term Support](https://gluonhq.com/services/javafx-support/) services.