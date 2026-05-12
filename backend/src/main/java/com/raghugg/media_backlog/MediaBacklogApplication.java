package com.raghugg.media_backlog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MediaBacklogApplication implements CommandLineRunner {
	@Autowired
	private MediaRepository mediaRepository;

	public static void main(String[] args) {
		SpringApplication.run(MediaBacklogApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// Add
		Media m = new Media(null, "Inception", MediaType.MOVIE);
		mediaRepository.save(m);

		// Display
		System.out.println(mediaRepository.findAll());

		// Remove
		mediaRepository.deleteById(m.getId());

		// Display
		System.out.println(mediaRepository.findAll());
	}
}
